-- ═══════════════════════════════════════════════════════════════════════════
-- JEEMAP — add 'neet' to test_scores and 'biology' to notes
-- Run in Supabase → SQL Editor
-- ═══════════════════════════════════════════════════════════════════════════

-- ── 1. test_scores: add 'neet' as a valid subject type ───────────────────
ALTER TABLE test_scores
  DROP CONSTRAINT IF EXISTS test_scores_subject_check;

ALTER TABLE test_scores
  ADD CONSTRAINT test_scores_subject_check
  CHECK (subject IN ('mains', 'adv', 'neet', 'physics', 'chemistry', 'maths', 'full'));

-- ── 2. notes: add 'biology' as a valid subject tag ───────────────────────
ALTER TABLE notes
  DROP CONSTRAINT IF EXISTS notes_subject_check;

ALTER TABLE notes
  ADD CONSTRAINT notes_subject_check
  CHECK (subject IN ('physics', 'chemistry', 'maths', 'biology', 'general') OR subject IS NULL);
