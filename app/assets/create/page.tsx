"use client";
import { useState } from "react";
import { createAsset } from "../../../../lib/data";
import { useRouter } from "next/navigation";

export default function CreateAssetPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newId = createAsset({ name, image, description });
    router.push(`/assets/${newId}`);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Create New Novastro Asset</h2>
      <input
        type="text"
        placeholder="Asset Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full border rounded p-2 mb-4"
        required
      />
      <input
        type="text"
        placeholder="Image URL"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        className="w-full border rounded p-2 mb-4"
        required
      />
      <textarea
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border rounded p-2 mb-4"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Create Asset
      </button>
    </form>
  );
}
