export default function Home() {
  // TODO: Fetch public notes from Supabase
  // TODO: Implement creating a new note with is_public toggle
  // TODO: Show visual difference between public and private notes

  return (
    <div className="max-w-2xl mx-auto p-8">
      <h1 className="text-3xl font-bold mb-2">Shared Notes</h1>
      <p className="text-gray-600 mb-6">Learn Row Level Security by building a notes app with public and private notes.</p>

      {/* TODO: Add form to create a new note with public/private toggle */}
      <div className="bg-white rounded-xl shadow p-6 mb-6">
        <h2 className="text-lg font-semibold mb-3">Create a Note</h2>
        <input
          type="text"
          placeholder="Note title..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <textarea
          placeholder="Write your note..."
          className="w-full border border-gray-300 rounded-lg px-4 py-2 mb-3 h-24 focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
        <div className="flex items-center justify-between">
          <label className="flex items-center gap-2 text-sm text-gray-600">
            <input type="checkbox" className="rounded" />
            Make this note public
          </label>
          <button className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700">
            Save Note
          </button>
        </div>
      </div>

      {/* TODO: Display notes list with public/private badges */}
      <div className="space-y-3">
        <p className="text-gray-500 text-center py-8">
          Set up your Supabase table and RLS policies, then notes will appear here!
        </p>
      </div>
    </div>
  );
}
