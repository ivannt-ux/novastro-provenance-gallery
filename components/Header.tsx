import Link from "next/link";

export default function Header() {
  return (
    <header className="flex justify-between items-center p-4 bg-gray-900 text-white">
      <h1 className="text-lg font-bold">Novastro Gallery</h1>
      <nav className="space-x-4 text-sm">
        <Link href="/">Home</Link>
        <Link href="/gallery">Gallery</Link>
        <Link href="/assets/create">Create</Link>
        <Link href="/login">Wallet</Link>
      </nav>
    </header>
  );
}
