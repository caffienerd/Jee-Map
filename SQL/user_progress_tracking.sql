-- ═══════════════════════════════════════════════════════════════════════════
-- JEEMAP — FULL BACKEND RESET
-- Run this entire file in Supabase → SQL Editor
-- Drops everything first, then rebuilds clean.
-- ═══════════════════════════════════════════════════════════════════════════

-- ── 1. DROP EVERYTHING ──────────────────────────────────────────────────────

drop table if exists test_scores cascade;
drop table if exists progress   cascade;


-- ── 2. PROGRESS TABLE ───────────────────────────────────────────────────────
-- Stores topic-level progress (T / P / A) for each subject.

create table progress (
  id          uuid        default gen_random_uuid() primary key,
  user_id     uuid        references auth.users(id) on delete cascade not null,
  subject     text        not null,
  chapter_idx integer     not null,
  topic_idx   integer     not null,
  status      text        check (status in ('theory', 'practiced', 'adv')) not null,
  updated_at  timestamptz default now(),

  unique (user_id, subject, chapter_idx, topic_idx)
);

-- RLS
alter table progress enable row level security;

-- Anyone (logged in or not) can read all rows
create policy "progress: public read"
  on progress for select
  using (true);

-- Only YOUR account can write
create policy "progress: owner write"
  on progress for all
  using  (auth.uid() = '8728f128-be6f-47b7-bb39-e11dc622e937')
  with check (auth.uid() = '8728f128-be6f-47b7-bb39-e11dc622e937');


-- ── 3. TEST SCORES TABLE ────────────────────────────────────────────────────
-- Full history — every attempt is saved as its own row.

create table test_scores (
  id         uuid        default gen_random_uuid() primary key,
  user_id    uuid        references auth.users(id) on delete cascade not null,
  subject    text        check (subject in ('physics', 'chemistry', 'maths', 'full')) not null,
  score      numeric     not null,
  max_score  numeric     not null,
  taken_at   timestamptz default now()
);

-- RLS
alter table test_scores enable row level security;

-- Anyone can read all rows
create policy "test_scores: public read"
  on test_scores for select
  using (true);

-- Only YOUR account can write
create policy "test_scores: owner write"
  on test_scores for all
  using  (auth.uid() = '8728f128-be6f-47b7-bb39-e11dc622e937')
  with check (auth.uid() = '8728f128-be6f-47b7-bb39-e11dc622e937');
