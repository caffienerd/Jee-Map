create table device_tokens (
  id         uuid default gen_random_uuid() primary key,
  user_id    uuid references auth.users(id) on delete cascade not null,
  token      text not null,
  updated_at timestamptz default now(),
  unique (user_id, token)
);

alter table device_tokens enable row level security;

-- Only the owner can read/write their own tokens
create policy "device_tokens: owner only"
  on device_tokens for all
  using  (auth.uid() = user_id)
  with check (auth.uid() = user_id);

-- Service role can read all (needed for Edge Function to send notifications)
create policy "device_tokens: service read"
  on device_tokens for select
  using (true);
