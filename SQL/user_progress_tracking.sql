-- ═══════════════════════════════════════════════════════════════════════════
-- JEEMAP — FULL BACKEND RESET (multi-user: Rishit + Vedanta)
-- Run this entire file in Supabase → SQL Editor
-- ═══════════════════════════════════════════════════════════════════════════

-- ── 1. DROP EVERYTHING ──────────────────────────────────────────────────────

drop table if exists test_scores cascade;
drop table if exists progress   cascade;


-- ── 2. PROGRESS TABLE ───────────────────────────────────────────────────────

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

alter table progress enable row level security;

-- Anyone can read all rows (visitors see both Rishit and Vedanta's progress)
create policy "progress: public read"
  on progress for select
  using (true);

-- Each user can only write their own rows
create policy "progress: owner write"
  on progress for all
  using  (auth.uid() = user_id)
  with check (auth.uid() = user_id);


-- ── 3. TEST SCORES TABLE ────────────────────────────────────────────────────

create table test_scores (
  id         uuid        default gen_random_uuid() primary key,
  user_id    uuid        references auth.users(id) on delete cascade not null,
  subject    text        check (subject in ('physics', 'chemistry', 'maths', 'full', 'mains', 'adv')) not null,
  score      numeric     not null,
  max_score  numeric     not null,
  taken_at   timestamptz default now()
);

alter table test_scores enable row level security;

-- Anyone can read all rows
create policy "test_scores: public read"
  on test_scores for select
  using (true);

-- Each user can only write their own rows
create policy "test_scores: owner write"
  on test_scores for all
  using  (auth.uid() = user_id)
  with check (auth.uid() = user_id);