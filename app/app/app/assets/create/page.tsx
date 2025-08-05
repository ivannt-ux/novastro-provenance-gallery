"use client";
import { useState } from "react";
import { addAsset } from "@/lib/data";
import { useRouter } from "next/navigation";

export default function CreateAsset() {
  const router = useRouter();
  const [form, setForm] = useState({
    name: "",
    description: "",
    image: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    addAsset(form);
    router.push("/gallery");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <h2 className="text-xl font-semibold">Add New Asset to Novastro</h2>
      <input
        name="name"
        placeholder="Asset name"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        required
      />
      <textarea
        name="description"
        placeholder="Description"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        required
      />
      <input
        name="image"
        placeholder="Image URL"
        className="w-full p-2 border rounded"
        onChange={handleChange}
        required
      />
      <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
        Create Asset
      </button>
    </form>
  );
}
