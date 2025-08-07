// app/assets/[id]/milestone/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addMilestone } from '@/lib/data';

export default function AddMilestonePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const milestone = {
      id: Date.now().toString(),            // unique id for the milestone
      assetId: params.id,                   // link to asset
      title,                               // milestone title
      description,                         // milestone description
      date: new Date().toISOString(),       // current date/time
    };
    addMilestone(params.id, milestone);
    router.push(`/assets/${params.id}`);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add Milestone</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Milestone Title"
          className="w-full border p-2 rounded"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />
        <textarea
          placeholder="Enter milestone description"
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          Add Milestone
        </button>
      </form>
    </main>
  );
}