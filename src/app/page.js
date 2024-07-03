"use client";

import Link from 'next/link';
import { useItems } from '../context/ItemsContext';
import { useEffect } from 'react';
import { getAnimeList } from '../firestoreService';

export default function Home() {
  const { items, setItems } = useItems();

  useEffect(() => {
    fetchAnimeList();
  }, []);

  const fetchAnimeList = async () => {
    const animeList = await getAnimeList();
    setItems(animeList);
  };

  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-4xl font-bold">Anime Watch List</h1>
        <nav>
          <Link href="/management">
            <span className="text-white hover:underline cursor-pointer">Go to Management</span>
          </Link>
        </nav>
      </header>
      <h2 className="text-3xl font-bold mb-4">Home Page</h2>
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index}>{item.name} - {item.releaseYear} - {item.episodeCount} episodes - {item.watchStatus}</li>
        ))}
      </ul>
    </div>
  );
}
