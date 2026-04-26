-- ═══════════════════════════════════════════════════════════════════════════
-- JEEMAP — NOTES TABLE
-- Run in Supabase → SQL Editor
-- ═══════════════════════════════════════════════════════════════════════════

-- ── 1. DROP IF EXISTS ────────────────────────────────────────────────────────
drop table if exists notes cascade;

-- ── 2. NOTES TABLE ───────────────────────────────────────────────────────────
create table notes (
  id          uuid        default gen_random_uuid() primary key,
  user_id     uuid        references auth.users(id) on delete cascade not null,
  title       text        not null default '',
  body        text        not null default '',
  priority    integer     not null default 0 check (priority >= 0 and priority <= 5),
  subject     text        check (subject in ('physics', 'chemistry', 'maths', 'general') or subject is null),
  created_at  timestamptz default now(),
  updated_at  timestamptz default now(),

  -- Only one note per priority level per user (except priority 0 = unset, allowed multiple)
  -- Enforced in app logic for priority 0; DB enforces uniqueness for 1-5
  unique nulls not distinct (user_id, priority) -- won't work for 0; see app logic
);

-- Drop the unique constraint above (Postgres partial index is cleaner):
alter table notes drop constraint if exists notes_user_id_priority_key;

-- Partial unique index: only one note per priority 1-5 per user
create unique index notes_priority_unique
  on notes (user_id, priority)
  where priority > 0;

alter table notes enable row level security;

-- ── 3. RLS POLICIES ──────────────────────────────────────────────────────────

-- Known editor UUIDs
-- Rishit:  8728f128-be6f-47b7-bb39-e11dc622e937
-- Vedanta: 1e062b7d-f8d8-4552-93e8-624a22023dd5

-- Rishit can read Vedanta's notes, Vedanta can read Rishit's notes.
-- No one else can read either.
create policy "notes: editors cross-read"
  on notes for select
  using (
    auth.uid() = user_id
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
  );

-- Each user can only write their own notes
create policy "notes: owner write"
  on notes for all
  using  (auth.uid() = user_id)
  with check (auth.uid() = user_id);