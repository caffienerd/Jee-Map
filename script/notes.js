// ── NOTES.JS ──────────────────────────────────────────────────────────────
// Notes tab: private per-user, cross-visible only between Rishit & Vedanta.
//
// Access model:
//   - Owner (you):        full read + write
//   - The other editor:   read-only
//   - Everyone else:      locked wall (RLS blocks it anyway)
//
// Priority: 0 = unset (no badge, multiple allowed)
//           1–5 = unique per user (enforced here + partial unique index in DB)
//
// Subject tag: physics | chemistry | maths | general | null
// Visibility: is_public = false (default, private) | true (visible to everyone)

const Notes = (() => {
  // ── State ────────────────────────────────────────────────────────────────
  let _notes = null;
  let _editingNote = null;

  // ── Priority config ──────────────────────────────────────────────────────
  const PRI = {
    0: { label: "No priority", badge: null, cls: "" },
    1: { label: "Priority 1", badge: "P1", cls: "pri-1" },
    2: { label: "Priority 2", badge: "P2", cls: "pri-2" },
    3: { label: "Priority 3", badge: "P3", cls: "pri-3" },
    4: { label: "Priority 4", badge: "P4", cls: "pri-4" },
    5: { label: "Priority 5", badge: "P5", cls: "pri-5" },
  };

  const SUBJ = {
    null: { label: "None", cls: "" },
    physics: { label: "Physics", cls: "subj-physics" },
    chemistry: { label: "Chemistry", cls: "subj-chemistry" },
    maths: { label: "Maths", cls: "subj-maths" },
    biology: { label: "Biology", cls: "subj-biology" },
    general: { label: "General", cls: "subj-general" },
  };

  // ── Helpers ───────────────────────────────────────────────────────────────
  function _esc(s) {
    if (!s) return "";
    return String(s)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function _fmtDate(iso) {
    if (!iso) return "";
    const d = new Date(iso);
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const now = new Date();
    const isToday =
      d.getDate() === now.getDate() &&
      d.getMonth() === now.getMonth() &&
      d.getFullYear() === now.getFullYear();
    if (isToday) {
      return d.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
    }
    const isThisYear = d.getFullYear() === now.getFullYear();
    return isThisYear
      ? `${d.getDate()} ${months[d.getMonth()]}`
      : `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`;
  }

  function _usedPriorities(excludeId = null) {
    if (!_notes) return new Set();
    return new Set(
      _notes
        .filter((n) => n.priority > 0 && n.id !== excludeId)
        .map((n) => n.priority),
    );
  }

  function _sorted(notes) {
    return [...notes].sort((a, b) => {
      if (a.priority === 0 && b.priority === 0)
        return new Date(b.updated_at) - new Date(a.updated_at);
      if (a.priority === 0) return 1;
      if (b.priority === 0) return -1;
      return a.priority - b.priority;
    });
  }

  // ── Load ─────────────────────────────────────────────────────────────────
  async function load(userId) {
    _notes = await Sync.fetchNotes(userId);
    return _notes;
  }

  function invalidate() {
    _notes = null;
  }

  // ── Render tab ───────────────────────────────────────────────────────────
  async function render(viewingUserId) {
    const main = document.getElementById("main");
    main.innerHTML = `
      <div class="notes-loading">
        <div class="notes-loading-spinner"></div>
        <span>loading notes…</span>
      </div>`;

    const isEditor = Auth.isEditor();
    const canEdit = Auth.canEdit(viewingUserId);
    const users = Auth.getUserList();
    const owner = users.find((u) => u.id === viewingUserId);

    const notes = await load(viewingUserId);
    // Private notes are visible only if:
    //   - you are the owner (canEdit), OR
    //   - you are an editor in the same exam group (Rishit ↔ Vedanta, not Adwiti)
    const editorId = Auth.getEditorId();
    const canSeePrivate =
      canEdit || (isEditor && Auth.sameExamGroup(editorId, viewingUserId));
    const visible = canSeePrivate ? notes : notes.filter((n) => n.is_public);
    const sorted = _sorted(visible);

    // Group by priority bucket: pinned (1-5), then rest
    const pinned = sorted.filter((n) => n.priority > 0);
    const unpinned = sorted.filter((n) => n.priority === 0);

    main.innerHTML = `
      <div class="notes-wrap">
        <div class="notes-topbar">
          <div class="notes-owner">
            <span class="notes-owner-name">${_esc(owner?.name)}'s notes</span>
            ${
              !canSeePrivate
                ? '<span class="notes-readonly-badge">public only</span>'
                : !canEdit
                  ? '<span class="notes-readonly-badge">read only</span>'
                  : ""
            }
          </div>
          ${
            canEdit
              ? `
            <button class="notes-add-btn" id="notesAddBtn" title="Add note">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>
              new note
            </button>`
              : ""
          }
        </div>

        ${
          sorted.length === 0
            ? `<div class="notes-empty">
               <div class="notes-empty-icon">
                 <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/><polyline points="10 9 9 9 8 9"/></svg>
               </div>
               <div class="notes-empty-msg">no notes yet</div>
               ${
                 canEdit
                   ? '<div class="notes-empty-hint">hit "new note" to add your first one</div>'
                   : !canSeePrivate
                     ? '<div class="notes-empty-hint">no public notes yet</div>'
                     : ""
               }
             </div>`
            : `<div class="notes-grid" id="notesGrid">
               ${
                 pinned.length > 0
                   ? `
                 <div class="notes-section-label">
                   <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                   pinned
                 </div>
                 ${pinned.map((n) => _card(n, canEdit)).join("")}
               `
                   : ""
               }
               ${
                 unpinned.length > 0
                   ? `
                 ${pinned.length > 0 ? '<div class="notes-section-label notes-section-label--rest">notes</div>' : ""}
                 ${unpinned.map((n) => _card(n, canEdit)).join("")}
               `
                   : ""
               }
             </div>`
        }
      </div>`;

    // Stagger cards in
    requestAnimationFrame(() => {
      document.querySelectorAll(".note-card").forEach((c, i) => {
        c.style.animationDelay = `${i * 35}ms`;
        c.classList.add("note-card--in");
      });
    });

    _bindCardEvents(canEdit, viewingUserId);

    document.getElementById("notesAddBtn")?.addEventListener("click", () => {
      _openModal(null, viewingUserId);
    });
  }

  // ── Card HTML ─────────────────────────────────────────────────────────────
  function _card(note, canEdit) {
    const pri = PRI[note.priority] || PRI[0];
    const subj = SUBJ[note.subject] || SUBJ[null];

    const preview = note.body
      ? note.body.replace(/\n+/g, " ").slice(0, 100) +
        (note.body.length > 100 ? "…" : "")
      : "";

    const hasMeta = note.priority > 0 || note.subject || note.is_public;

    return `
      <div class="note-card ${pri.cls ? "note-card--" + pri.cls : ""}" data-note-id="${note.id}">
        <div class="note-card-inner">
          ${
            hasMeta
              ? `
            <div class="note-card-meta">
              ${note.priority > 0 ? `<span class="note-badge note-badge--${pri.cls}">${pri.badge}</span>` : ""}
              ${note.subject ? `<span class="note-tag note-tag--${subj.cls}">${subj.label}</span>` : ""}
              ${note.is_public ? `<span class="note-tag note-tag--public"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> public</span>` : ""}
            </div>`
              : ""
          }
          <div class="note-card-title">${
            note.title
              ? _esc(note.title)
              : '<span class="note-untitled">untitled</span>'
          }</div>
          ${preview ? `<div class="note-card-preview">${_esc(preview)}</div>` : ""}
          <div class="note-card-foot">
            <span class="note-card-date">${_fmtDate(note.updated_at)}</span>
            ${
              canEdit
                ? `
              <button class="note-del-btn" data-note-id="${note.id}" title="Delete" aria-label="Delete note">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
              </button>`
                : ""
            }
          </div>
        </div>
      </div>`;
  }

  function _bindCardEvents(canEdit, viewingUserId) {
    document.querySelectorAll(".note-card").forEach((card) => {
      let _pressTimer = null;
      let _didLongPress = false;

      card.addEventListener(
        "touchstart",
        () => {
          _didLongPress = false;
          _pressTimer = setTimeout(() => {
            _didLongPress = true;
            if (canEdit) {
              const note = _notes?.find((n) => n.id === card.dataset.noteId);
              if (note) {
                card.classList.add("note-card--pressed");
                _openModal(note, viewingUserId);
              }
            }
          }, 500);
        },
        { passive: true },
      );

      card.addEventListener(
        "touchend",
        () => {
          clearTimeout(_pressTimer);
          setTimeout(() => card.classList.remove("note-card--pressed"), 200);
        },
        { passive: true },
      );

      card.addEventListener("touchmove", () => clearTimeout(_pressTimer), {
        passive: true,
      });

      card.addEventListener("click", (e) => {
        if (e.target.closest(".note-del-btn")) return;
        if (_didLongPress) {
          _didLongPress = false;
          return;
        }
        const note = _notes?.find((n) => n.id === card.dataset.noteId);
        if (note) _openViewModal(note, viewingUserId, canEdit);
      });

      if (canEdit) {
        card.addEventListener("dblclick", (e) => {
          if (e.target.closest(".note-del-btn")) return;
          const note = _notes?.find((n) => n.id === card.dataset.noteId);
          if (note) _openModal(note, viewingUserId);
        });
      }
    });

    document.querySelectorAll(".note-del-btn").forEach((btn) => {
      // Stop touchstart bubbling so it never triggers the card's long-press timer
      btn.addEventListener("touchstart", (e) => e.stopPropagation(), {
        passive: false,
      });

      btn.addEventListener("click", async (e) => {
        e.stopPropagation();
        const id = btn.dataset.noteId;
        if (!btn.dataset.confirm) {
          btn.dataset.confirm = "1";
          btn.classList.add("note-del-btn--confirm");
          btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>`;
          setTimeout(() => {
            if (btn.dataset.confirm) {
              delete btn.dataset.confirm;
              btn.classList.remove("note-del-btn--confirm");
              btn.innerHTML = `<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>`;
            }
          }, 2500);
          return;
        }
        btn.disabled = true;
        const noteCard = btn.closest(".note-card");
        if (noteCard) {
          noteCard.style.transition = "opacity .2s, transform .2s";
          noteCard.style.opacity = "0";
          noteCard.style.transform = "scale(.95)";
        }
        try {
          await Sync.deleteNote(viewingUserId, id);
        } catch (err) {
          console.error("[Notes] deleteNote error:", err);
        }
        setTimeout(async () => await render(viewingUserId), 200);
      });
    });
  }

  // ── View modal (tap) ──────────────────────────────────────────────────────
  function _openViewModal(note, viewingUserId, canEdit) {
    document.getElementById("notesViewModal")?.remove();

    const pri = PRI[note.priority] || PRI[0];
    const subj = SUBJ[note.subject] || SUBJ[null];
    const hasMeta = note.priority > 0 || note.subject || note.is_public;
    const bodyHTML = note.body ? _esc(note.body).replace(/\n/g, "<br>") : "";

    document.body.insertAdjacentHTML(
      "beforeend",
      `
      <div class="notes-modal-overlay" id="notesViewModal">
        <div class="notes-modal notes-modal--view" role="dialog" aria-modal="true">

          <div class="nmodal-header">
            <div class="nview-header-left">
              ${
                hasMeta
                  ? `
                <div class="nview-meta">
                  ${note.priority > 0 ? `<span class="note-badge note-badge--${pri.cls}">${pri.badge}</span>` : ""}
                  ${note.subject ? `<span class="note-tag note-tag--${subj.cls}">${subj.label}</span>` : ""}
                  ${note.is_public ? `<span class="note-tag note-tag--public"><svg width="9" height="9" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg> public</span>` : ""}
                </div>`
                  : ""
              }
              <span class="nview-date">${_fmtDate(note.updated_at)}</span>
            </div>
            <div class="nview-header-actions">
              ${
                canEdit
                  ? `
                <button class="nview-edit-btn" id="nviewEditBtn" title="Edit">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>
                </button>`
                  : ""
              }
              <button class="nmodal-close" id="nviewClose" aria-label="close">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
              </button>
            </div>
          </div>

          <div class="nmodal-body nview-body">
            ${note.title ? `<div class="nview-title">${_esc(note.title)}</div>` : ""}
            ${bodyHTML ? `<div class="nview-content">${bodyHTML}</div>` : ""}
            ${!note.title && !bodyHTML ? `<div class="nview-empty">no content</div>` : ""}
          </div>

        </div>
      </div>`,
    );

    requestAnimationFrame(() =>
      document.getElementById("notesViewModal")?.classList.add("is-open"),
    );

    const closeView = () => {
      const overlay = document.getElementById("notesViewModal");
      if (!overlay) return;
      overlay.classList.remove("is-open");
      overlay.classList.add("is-closing");
      setTimeout(() => overlay.remove(), 220);
    };

    document.getElementById("nviewClose").addEventListener("click", closeView);
    document.getElementById("notesViewModal").addEventListener("click", (e) => {
      if (e.target.id === "notesViewModal") closeView();
    });
    document.addEventListener("keydown", function escHandler(e) {
      if (e.key === "Escape") {
        closeView();
        document.removeEventListener("keydown", escHandler);
      }
    });
    document.getElementById("nviewEditBtn")?.addEventListener("click", () => {
      closeView();
      setTimeout(() => _openModal(note, viewingUserId), 230);
    });
  }

  // ── Modal ─────────────────────────────────────────────────────────────────
  function _openModal(note, viewingUserId) {
    _editingNote = note;
    document.getElementById("notesModal")?.remove();

    const canEdit = Auth.canEdit(viewingUserId);
    const usedPriorities = _usedPriorities(note?.id ?? null);

    const priOptions = [0, 1, 2, 3, 4, 5]
      .map((p) => {
        const cfg = PRI[p];
        const used = p > 0 && usedPriorities.has(p);
        const sel = (note?.priority ?? 0) === p;
        return `
        <button class="mpri-btn mpri-btn--${p} ${sel ? "is-sel" : ""} ${used ? "is-used" : ""}"
                data-pri="${p}" ${used ? "disabled" : ""} title="${cfg.label}${used ? " (in use)" : ""}">
          ${p === 0 ? '<span class="mpri-none">—</span>' : `<span class="mpri-num">${p}</span>`}
          ${used ? '<span class="mpri-used-dot"></span>' : ""}
        </button>`;
      })
      .join("");

    const subjOptions = [null, "physics", "chemistry", "maths", "general"]
      .map((s) => {
        const cfg = SUBJ[s];
        const sel = (note?.subject ?? null) === s;
        const key = s ?? "none";
        return `
        <button class="msubj-btn msubj-btn--${key} ${sel ? "is-sel" : ""}" data-subj="${s ?? ""}">
          ${cfg.label}
        </button>`;
      })
      .join("");

    const isNew = !note;

    document.body.insertAdjacentHTML(
      "beforeend",
      `
      <div class="notes-modal-overlay" id="notesModal">
        <div class="notes-modal" role="dialog" aria-modal="true">

          <div class="nmodal-header">
            <span class="nmodal-eyebrow">${isNew ? "new note" : canEdit ? "edit note" : "note"}</span>
            <button class="nmodal-close" id="nmodalClose" aria-label="close">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            </button>
          </div>

          <div class="nmodal-body">
            <input
              type="text" id="nmodalTitle" class="nmodal-title-input"
              placeholder="Note title…" maxlength="120"
              value="${_esc(note?.title ?? "")}"
              ${canEdit ? "" : "readonly"}
            />
            <textarea
              id="nmodalBody" class="nmodal-body-input"
              placeholder="Write something…"
              ${canEdit ? "" : "readonly"}
            >${_esc(note?.body ?? "")}</textarea>

            ${
              canEdit
                ? `
            <div class="nmodal-fields">
              <div class="nmodal-field-row">
                <span class="nmodal-field-label">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
                  priority
                </span>
                <div class="mpri-row" id="mpriRow">${priOptions}</div>
              </div>
              <div class="nmodal-field-row">
                <span class="nmodal-field-label">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.59 13.41l-7.17 7.17a2 2 0 01-2.83 0L2 12V2h10l8.59 8.59a2 2 0 010 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>
                  subject
                </span>
                <div class="msubj-row" id="msubjRow">${subjOptions}</div>
              </div>
              <div class="nmodal-field-row nmodal-field-row--visibility">
                <span class="nmodal-field-label">
                  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                  visibility
                </span>
                <button class="mvis-toggle ${(note?.is_public ?? false) ? "is-public" : ""}" id="mvisToggle">
                  <span class="mvis-icon mvis-icon--private">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    private
                  </span>
                  <span class="mvis-icon mvis-icon--public">
                    <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
                    public
                  </span>
                  <span class="mvis-knob"></span>
                </button>
              </div>
            </div>`
                : `
            <div class="nmodal-meta-readonly">
              ${note?.priority > 0 ? `<span class="note-badge note-badge--${PRI[note.priority].cls}">${PRI[note.priority].badge}</span>` : ""}
              ${note?.subject ? `<span class="note-tag note-tag--${SUBJ[note.subject].cls}">${SUBJ[note.subject].label}</span>` : ""}
              ${note?.is_public ? `<span class="note-tag note-tag--public">public</span>` : ""}
            </div>`
            }
          </div>

          ${
            canEdit
              ? `
          <div class="nmodal-footer">
            ${
              note
                ? `
              <button class="nmodal-del-btn" id="nmodalDel">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg>
                delete
              </button>`
                : "<div></div>"
            }
            <button class="nmodal-save-btn" id="nmodalSave">
              ${isNew ? "add note" : "save"}
            </button>
          </div>`
              : ""
          }

        </div>
      </div>`,
    );

    // ── Animate in
    requestAnimationFrame(() => {
      document.getElementById("notesModal")?.classList.add("is-open");
    });

    // ── Close handlers
    const close = () => {
      const overlay = document.getElementById("notesModal");
      if (!overlay) return;
      overlay.classList.remove("is-open");
      overlay.classList.add("is-closing");
      setTimeout(() => overlay.remove(), 220);
      _editingNote = null;
    };

    document.getElementById("nmodalClose").addEventListener("click", close);
    // No backdrop-click-to-close on the edit modal — accidental taps above
    // the sheet would silently discard unsaved changes.
    document.addEventListener("keydown", function escHandler(e) {
      if (e.key === "Escape") {
        close();
        document.removeEventListener("keydown", escHandler);
      }
    });

    if (!canEdit) {
      setTimeout(() => document.getElementById("nmodalTitle")?.blur(), 50);
      return;
    }

    // ── Priority picker
    let selPri = note?.priority ?? 0;
    document.querySelectorAll(".mpri-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        selPri = parseInt(btn.dataset.pri);
        document
          .querySelectorAll(".mpri-btn")
          .forEach((b) => b.classList.remove("is-sel"));
        btn.classList.add("is-sel");
      });
    });

    // ── Visibility toggle
    let selPublic = note?.is_public ?? false;
    document.getElementById("mvisToggle")?.addEventListener("click", () => {
      selPublic = !selPublic;
      document
        .getElementById("mvisToggle")
        .classList.toggle("is-public", selPublic);
    });

    // ── Subject picker
    let selSubj = note?.subject ?? null;
    document.querySelectorAll(".msubj-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        selSubj = btn.dataset.subj || null;
        document
          .querySelectorAll(".msubj-btn")
          .forEach((b) => b.classList.remove("is-sel"));
        btn.classList.add("is-sel");
      });
    });

    // ── Save
    document
      .getElementById("nmodalSave")
      ?.addEventListener("click", async () => {
        const titleEl = document.getElementById("nmodalTitle");
        const bodyEl = document.getElementById("nmodalBody");
        const title = titleEl.value.trim();
        const body = bodyEl.value.trim();

        if (!title && !body) {
          titleEl.classList.add("shake");
          setTimeout(() => titleEl.classList.remove("shake"), 400);
          titleEl.focus();
          return;
        }

        const btn = document.getElementById("nmodalSave");
        btn.disabled = true;
        btn.textContent = "…";

        const saved = await Sync.saveNote(viewingUserId, {
          id: note?.id ?? null,
          title,
          body,
          priority: selPri,
          subject: selSubj || null,
          is_public: selPublic,
        });

        if (saved) {
          close();
          await render(viewingUserId);
        } else {
          btn.disabled = false;
          btn.textContent = isNew ? "add note" : "save";
        }
      });

    // ── Delete
    document
      .getElementById("nmodalDel")
      ?.addEventListener("click", async () => {
        if (!note) return;
        const btn = document.getElementById("nmodalDel");

        // Confirm state
        if (!btn.dataset.confirm) {
          btn.dataset.confirm = "1";
          btn.textContent = "sure?";
          btn.classList.add("nmodal-del-btn--confirm");
          setTimeout(() => {
            if (btn.dataset.confirm) {
              delete btn.dataset.confirm;
              btn.innerHTML = `<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="3 6 5 6 21 6"/><path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/><path d="M10 11v6"/><path d="M14 11v6"/><path d="M9 6V4h6v2"/></svg> delete`;
              btn.classList.remove("nmodal-del-btn--confirm");
            }
          }, 2500);
          return;
        }

        btn.disabled = true;
        btn.textContent = "…";
        await Sync.deleteNote(viewingUserId, note.id);
        close();
        await render(viewingUserId);
      });

    // ── Auto-focus title
    setTimeout(() => document.getElementById("nmodalTitle")?.focus(), 60);
  }

  return { render, invalidate };
})();
