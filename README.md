# JEE Map

A personal JEE prep tracker built by Rishit and Vedanta to map out the entire JEE syllabus — topics, chapters, subtopics — and track progress through it.

Live at **[caffienerd.github.io/Jee-Map](https://caffienerd.github.io/Jee-Map/)** · Also available as an Android app, please check [here](https://github.com/caffienerd/Jee-Map/releases/tag/untagged-4a64436410c6e3979efa)

---

## What it does

- Browse the full JEE syllabus across Physics, Chemistry, and Maths — broken down into subjects → chapters → topics → subtopics
- Tag chapters by category (Mechanics, E&M, OC, PC, Calculus, etc.) and filter by them
- Track progress per topic with status markers — TPA system (Theory, Practiced, Advanced)
- Log test scores separately for JEE Mains and Advanced with date ranges
- See overall and per-subject progress stats at a glance
- Private notes per user — tag by subject, assign a priority (1–5), tap to read, long-press to edit

## Access model

- **Rishit and Vedanta** — each can read and write their own progress and notes only; neither can touch the other's data
- **Everyone else** — read-only for progress and stats; notes are completely private and not visible to anyone outside the two authors

Auth is handled via GitHub OAuth + Supabase. Permissions are enforced at the app level by UUID matching and at the database level via RLS policies.

## Tech stack

- Vanilla JS, no framework
- Supabase (auth + database)
- Capacitor v7 (Android wrapper)
- Hosted on GitHub Pages

## Running locally

```bash
# Serve the web app
npx serve www

# Build and push to connected Android device
./install.sh
```