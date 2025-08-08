'use client';

import { useRouter } from 'next/navigation';
import { createAsset } from '@/lib/data';
import { useState } from 'react';
import type { Asset } from '@/lib/types';

export default function CreateAssetPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [image, setImage] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    const newAsset: Asset = {
      id: Date.now().toString(),
      name,
      image,
      description,
      milestones: [],
    };
    await createAsset(newAsset);
    router.push(`/assets/${newAsset.id}`);
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="card max-w-xl w-full mx-auto space-y-6">
        <h1 className="text-2xl font-bold mb-2 text-center">Create New Asset</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Asset Name"
            className="w-full p-2 rounded border border-transparent focus:border-blue-300 bg-white bg-opacity-10 text-white placeholder-blue-100"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            className="w-full p-2 rounded border border-transparent focus:border-blue-300 bg-white bg-opacity-10 text-white placeholder-blue-100"
            value={image}
            onChange={(e) => setImage(e.target.value)}
            required
          />
          <textarea
            placeholder="Asset Description"
            className="w-full p-2 rounded border border-transparent focus:border-blue-300 bg-white bg-opacity-10 text-white placeholder-blue-100"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[var(--blue-light)] text-[var(--blue-dark)] font-bold px-4 py-2 rounded shadow hover:bg-[var(--blue-medium)] hover:text-white transition"
          >
            Create Asset
          </button>
        </form>
      </div>
    </main>
  );
}