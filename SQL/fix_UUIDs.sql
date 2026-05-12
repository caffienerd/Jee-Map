-- Auto-generated — run in Supabase SQL Editor whenever UUIDs change.
-- JEE group  (Rishit + Vedanta): cross-read private + public notes
-- NEET group (Adwiti):           public notes only, visible to everyone

-- ── Known UUIDs ──────────────────────────────────────────────────────────
-- Rishit:  8728f128-be6f-47b7-bb39-e11dc622e937
-- Vedanta: 63a3a690-9e02-4359-9276-1e63f69c33a7
-- Adwiti:  ADWITI_UUID   ← replace before running

drop policy if exists "notes: read"               on notes;
drop policy if exists "notes: editors cross-read" on notes;

create policy "notes: read"
  on notes for select
  using (
    -- Owner always sees their own notes
    auth.uid() = user_id

    -- JEE group: Rishit ↔ Vedanta can cross-read private + public notes
    or (
      auth.uid() in (
        '8728f128-be6f-47b7-bb39-e11dc622e937',
        '63a3a690-9e02-4359-9276-1e63f69c33a7'
      )
      and user_id in (
        '8728f128-be6f-47b7-bb39-e11dc622e937',
        '63a3a690-9e02-4359-9276-1e63f69c33a7'
      )
    )

    -- Public notes from JEE group visible to everyone
    or (
      is_public = true
      and user_id in (
        '8728f128-be6f-47b7-bb39-e11dc622e937',
        '63a3a690-9e02-4359-9276-1e63f69c33a7'
      )
    )

    -- Public notes from Adwiti visible to everyone
    or (
      is_public = true
      and user_id = 'ADWITI_UUID'
    )
  );

drop policy if exists "notes: owner write" on notes;

create policy "notes: owner write"
  on notes for all
  using  (auth.uid() = user_id)
  with check (auth.uid() = user_id);
