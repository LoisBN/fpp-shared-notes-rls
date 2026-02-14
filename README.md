# Shared Notes — Row Level Security

Build a collaborative notes app to learn Supabase Row Level Security (RLS) policies that control who can see and edit data.

## What You'll Learn
- RLS policies (SELECT, INSERT, UPDATE, DELETE)
- Using auth.uid() in policies
- Public vs private data access control
- Policy testing and debugging
- Real-time multi-user scenarios

## Tech Stack
- **React Router v7** (framework mode) — pages and routing
- **Supabase** — database and auth
- **Tailwind CSS v4** — styling
- **TypeScript** — type-safe JavaScript

## Getting Started

```bash
# 1. Clone this repo
git clone https://github.com/LoisBN/fpp-shared-notes-rls.git
cd fpp-shared-notes-rls

# 2. Install dependencies
npm install

# 3. Copy the environment file
cp .env.example .env
# Add your Supabase URL and anon key to .env

# 4. Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to see the app.

## Project Structure

```
fpp-shared-notes-rls/
├── app/
│   ├── routes/
│   │   └── home.tsx          # Notes list + create form
│   └── lib/
│       └── supabase.ts       # Supabase client setup
├── .env.example
├── package.json
└── README.md
```

## Exercise Tasks

1. **Create notes table** — Add columns: id, user_id, title, content, is_public, created_at
2. **Enable RLS** — Turn on Row Level Security in Supabase Table Editor → Policies tab
3. **Write SELECT policy** — Allow public reads: `is_public = true` OR `auth.uid() = user_id`
4. **Write CUD policies** — Only users can create/update/delete their own notes: `auth.uid() = user_id`
5. **Test policies** — Verify public notes visible to all, private notes only to owner

## Hints

- Enable RLS in Supabase Table Editor → Policies tab
- Policy template for own rows: `auth.uid() = user_id`
- Policy template for public data: `is_public = true`
- Create separate policies for each operation (SELECT, INSERT, UPDATE, DELETE)
- Test by creating notes with different users and checking visibility

---

Built for [AI Code Academy](https://aicode-academy.com) — From Prompt to Production course.
