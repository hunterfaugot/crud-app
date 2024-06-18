"use client";  // Add this line at the top

import Link from 'next/link';  // Import Link from next/link
import { useItems } from '../context/ItemsContext';  // Import the custom hook

export default function Home() {
  const { items } = useItems();  // Access items from context

  return (
    <div className="container mx-auto p-4">
      <nav className="mb-4">
        <Link href="/management">
          <span className="text-blue-500 hover:underline cursor-pointer">Go to Management</span>
        </Link>
      </nav>
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
