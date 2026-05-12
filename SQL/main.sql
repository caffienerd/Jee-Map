-- WARNING: This schema is for context only and is not meant to be run.
-- Table order and constraints may not be valid for execution.

CREATE TABLE public.device_tokens (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid,
  token text NOT NULL UNIQUE,
  updated_at timestamp with time zone DEFAULT now(),
  is_anonymous boolean NOT NULL DEFAULT false,
  CONSTRAINT device_tokens_pkey PRIMARY KEY (id),
  CONSTRAINT device_tokens_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);
CREATE TABLE public.notes (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  title text NOT NULL DEFAULT ''::text,
  body text NOT NULL DEFAULT ''::text,
  priority integer NOT NULL DEFAULT 0 CHECK (priority >= 0 AND priority <= 5),
  subject text CHECK ((subject = ANY (ARRAY['physics'::text, 'chemistry'::text, 'maths'::text, 'general'::text])) OR subject IS NULL),
  created_at timestamp with time zone DEFAULT now(),
  updated_at timestamp with time zone DEFAULT now(),
  is_public boolean NOT NULL DEFAULT false,
  CONSTRAINT notes_pkey PRIMARY KEY (id),
  CONSTRAINT notes_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);
CREATE TABLE public.progress (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  subject text NOT NULL,
  chapter_idx integer NOT NULL,
  topic_idx integer NOT NULL,
  status text NOT NULL CHECK (status = ANY (ARRAY['theory'::text, 'practiced'::text, 'adv'::text])),
  updated_at timestamp with time zone DEFAULT now(),
  CONSTRAINT progress_pkey PRIMARY KEY (id),
  CONSTRAINT progress_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);
CREATE TABLE public.test_scores (
  id uuid NOT NULL DEFAULT gen_random_uuid(),
  user_id uuid NOT NULL,
  subject text NOT NULL CHECK (subject = ANY (ARRAY['physics'::text, 'chemistry'::text, 'maths'::text, 'full'::text, 'mains'::text, 'adv'::text])),
  score numeric NOT NULL,
  max_score numeric NOT NULL,
  taken_at timestamp with time zone DEFAULT now(),
  CONSTRAINT test_scores_pkey PRIMARY KEY (id),
  CONSTRAINT test_scores_user_id_fkey FOREIGN KEY (user_id) REFERENCES auth.users(id)
);