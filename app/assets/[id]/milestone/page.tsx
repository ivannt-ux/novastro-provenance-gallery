"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

import { addMilestone } from "../../../../lib/data";

export default function AddMilestone({ params }: { params: { id: string } }) {
  const router = useRouter();
  const [milestone, setMilestone] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addMilestone(params.id, milestone);
    router.push(`/assets/${params.id}`);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Add Milestone to Asset</h2>
      <textarea
        className="w-full p-2 border rounded"
        placeholder="e.g. Repaired on August 2025"
        value={milestone}
        onChange={(e) => setMilestone(e.target.value)}
        required
      />
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">
        Add Milestone
      </button>
    </form>
  );
}
