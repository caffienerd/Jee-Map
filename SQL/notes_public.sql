-- ═══════════════════════════════════════════════════════════════════════════
-- JEEMAP — add is_public to notes
-- Run in Supabase → SQL Editor
-- ═══════════════════════════════════════════════════════════════════════════

-- ── 1. Add column (default false = private) ──────────────────────────────
alter table notes
  add column if not exists is_public boolean not null default false;

-- ── 2. Drop old select policy and recreate with public support ────────────
drop policy if exists "notes: editors cross-read" on notes;

create policy "notes: read"
  on notes for select
  using (
    -- Owner always sees their own notes
    auth.uid() = user_id
    -- The two editors can cross-read each other's notes (public + private)
    or (
      auth.uid() in (
        '8728f128-be6f-47b7-bb39-e11dc622e937',
        '1e062b7d-f8d8-4552-93e8-624a22023dd5'
      )
      and user_id in (
        '8728f128-be6f-47b7-bb39-e11dc622e937',
        '1e062b7d-f8d8-4552-93e8-624a22023dd5'
      )
    )
    -- Anyone can read public notes from either editor
    or (
      is_public = true
      and user_id in (
        '8728f128-be6f-47b7-bb39-e11dc622e937',
        '1e062b7d-f8d8-4552-93e8-624a22023dd5'
      )
    )
  );

-- write policy unchanged — owners only
-- "notes: owner write" already exists and stays as-is
