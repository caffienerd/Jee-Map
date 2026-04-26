-- ═══════════════════════════════════════════════════════════════════════════
-- JEEMAP — fix device_tokens RLS for anonymous inserts
-- Run in Supabase → SQL Editor
-- ═══════════════════════════════════════════════════════════════════════════

-- Drop all existing policies and start clean
drop policy if exists "device_tokens: owner write"         on device_tokens;
drop policy if exists "device_tokens: anonymous insert"    on device_tokens;
drop policy if exists "device_tokens: service read"        on device_tokens;
drop policy if exists "device_tokens: owner only"          on device_tokens;

-- Authenticated users: full access to their own rows
create policy "device_tokens: owner all"
  on device_tokens for all
  using  (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Anonymous users: can INSERT a row where user_id is null
-- NOTE: INSERT only checks WITH CHECK, not USING
create policy "device_tokens: anon insert"
  on device_tokens for insert
  with check (user_id is null and is_anonymous = true);

-- Anonymous users: can UPDATE their own row matched by token
-- (needed when upgrading anon → authed on login)
create policy "device_tokens: anon update"
  on device_tokens for update
  using  (user_id is null and is_anonymous = true)
  with check (true);

-- Everyone can read all tokens — needed for the edge function
-- (service role bypasses RLS anyway, but this covers the anon client path)
create policy "device_tokens: public read"
  on device_tokens for select
  using (true);
