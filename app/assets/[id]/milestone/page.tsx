// app/assets/[id]/milestone/page.tsx
'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addMilestone } from '@/lib/data';

export default function AddMilestonePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [text, setText] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    addMilestone(params.id, text);
    router.push(`/assets/${params.id}`);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Add Milestone</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <textarea
          placeholder="Enter milestone description"
          className="w-full border p-2 rounded"
          value={text}
          onChange={(e) => setText(e.target.value)}
          required
        />
        <button type="submit" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          Add Milestone
        </button>
      </form>
    </main>
  );
}
