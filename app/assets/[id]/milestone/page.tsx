'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { addMilestone } from '@/lib/data';

export default function AddMilestonePage({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const milestone = {
      id: Date.now().toString(),
      assetId: params.id,
      title,
      description,
      date: new Date().toISOString(),
    };
    addMilestone(params.id, milestone);
    router.push(`/assets/${params.id}`);
  };

  return (
    <main className="flex justify-center items-center min-h-screen">
      <div className="card max-w-xl w-full mx-auto space-y-6">
        <h1 className="text-2xl font-bold text-center mb-2">Add Milestone</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Milestone Title"
            className="w-full p-2 rounded border border-transparent focus:border-blue-300 bg-white bg-opacity-10 text-white placeholder-blue-100"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Enter milestone description"
            className="w-full p-2 rounded border border-transparent focus:border-blue-300 bg-white bg-opacity-10 text-white placeholder-blue-100"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
          <button
            type="submit"
            className="bg-[var(--blue-light)] text-[var(--blue-dark)] font-bold px-4 py-2 rounded shadow hover:bg-[var(--blue-medium)] hover:text-white transition"
          >
            Add Milestone
          </button>
        </