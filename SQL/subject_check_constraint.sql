ALTER TABLE test_scores
  DROP CONSTRAINT test_scores_subject_check;

ALTER TABLE test_scores
  ADD CONSTRAINT test_scores_subject_check
  CHECK (subject IN ('mains', 'adv', 'physics', 'chemistry', 'maths', 'full'));
