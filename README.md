# Shared Notes with RLS
A collaborative notes app to learn Supabase Row Level Security (RLS) policies.

## Getting Started
1. Clone: `git clone https://github.com/LoisBN/fpp-shared-notes-rls.git`
2. Install: `npm install`
3. Copy `.env.example` to `.env` and add your Supabase credentials
4. Run: `npm run dev`

## Your Tasks
- Create a `notes` table with `user_id`, `title`, `content`, `is_public` columns
- Enable RLS on the notes table
- Create policies: users can read public notes, users can CRUD their own notes
- Display public vs private notes differently
- Test that RLS policies work correctly
