-- ═══════════════════════════════════════════════════════════════════════════
-- JEEMAP — device_tokens: support anonymous (logged-out) users
-- Run in Supabase → SQL Editor
-- ═══════════════════════════════════════════════════════════════════════════

-- ── 1. Make user_id nullable (anonymous users have no auth.uid()) ─────────
alter table device_tokens
  alter column user_id drop not null;

-- ── 2. Add is_anonymous flag so we know which tokens are guest devices ────
alter table device_tokens
  add column if not exists is_anonymous boolean not null default false;

-- ── 3. Drop old unique constraint (user_id, token) — user_id can be null ──
alter table device_tokens
  drop constraint if exists device_tokens_user_id_token_key;

-- ── 4. New unique constraint: just on token (one row per device) ──────────
alter table device_tokens
  add constraint device_tokens_token_key unique (token);

-- ── 5. Drop old RLS policies and recreate ────────────────────────────────
drop policy if exists "device_tokens: owner only" on device_tokens;
drop policy if exists "device_tokens: service read" on device_tokens;

-- Authenticated users can manage their own token
create policy "device_tokens: owner write"
  on device_tokens for all
  using  (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Anonymous inserts allowed (user_id will be null)
create policy "device_tokens: anonymous insert"
  on device_tokens for insert
  with check (user_id is null and is_anonymous = true);

-- Anonymous can update their own token (matched by token value via service role)
-- Service role bypasses RLS anyway, so edge function can always read all
create policy "device_tokens: service read"
  on device_tokens for select
  using (true);
