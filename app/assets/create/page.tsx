// app/assets/create/page.tsx
'use client';

import { useRouter } from 'next/navigation';
import { createAsset } from '@/lib/data';
import { useState } from 'react';

export default function CreateAssetPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const id = createAsset({ name, image, description });
    router.push(`/assets/${id}`);
  };

  return (
    <main className="p-6">
      <h1 className="text-2xl font-bold mb-4">Create New Asset</h1>
      <form onSubmit={handleSubmit} className="space-y-4 max-w-xl">
        <input
          type="text"
          placeholder="Asset Name"
          className="w-full border p-2 rounded"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Image URL"
          className="w-full border p-2 rounded"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
        />
        <textarea
          placeholder="Asset Description"
          className="w-full border p-2 rounded"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        <button type="submit" className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800">
          Create Asset
        </button>
      </form>
    </main>
  );
}
