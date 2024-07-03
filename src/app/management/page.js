"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { useItems } from '../../context/ItemsContext';
import { getAnimeList, addAnime, updateAnime, deleteAnime } from '../../firestoreService';

export default function Management() {
  const { items, setItems } = useItems();
  const [newAnime, setNewAnime] = useState({
    name: '',
    releaseYear: '',
    episodeCount: '',
    watchStatus: 'None',
  });
  const [editAnime, setEditAnime] = useState({ index: -1, value: { name: '', releaseYear: '', episodeCount: '', watchStatus: 'None' } });

  useEffect(() => {
    if (typeof window !== "undefined") {
      fetchAnimeList();
    }
  }, []);

  const fetchAnimeList = async () => {
    const animeList = await getAnimeList();
    setItems(animeList);
    console.log("Anime list set:", animeList);
  };

  const handleAddAnime = async () => {
    if (newAnime.name.trim() !== '') {
      await addAnime(newAnime);
      fetchAnimeList();
      setNewAnime({ name: '', releaseYear: '', episodeCount: '', watchStatus: 'None' });
      console.log("Added new anime:", newAnime);
    }
  };

  const handleDeleteAnime = async (id) => {
    await deleteAnime(id);
    fetchAnimeList();
  };

  const handleEditAnime = async () => {
    if (editAnime.value.name.trim() !== '') {
      await updateAnime(editAnime.value.id, editAnime.value);
      fetchAnimeList();
      setEditAnime({ index: -1, value: { name: '', releaseYear: '', episodeCount: '', watchStatus: 'None' } });
    }
  };

  const handleEditClick = (index, value) => {
    setEditAnime({ index, value });
  };

  return (
    <div className="container mx-auto p-4">
      <header className="mb-4">
        <h1 className="text-4xl font-bold">Anime Watch List</h1>
      </header>
      <h2 className="text-3xl font-bold mb-4">Management Page</h2>
      <div className="mb-4">
        <h3 className="text-xl mb-2">Add New Anime</h3>
        
        <input
          type="text"
          className="border p-2 mb-2 w-full"
          placeholder="Name"
          value={newAnime.name}
          onChange={(e) => setNewAnime({ ...newAnime, name: e.target.value })}
        />
        
        <input
          type="number"
          className="border p-2 mb-2 w-full"
          placeholder="Release Year"
          value={newAnime.releaseYear}
          onChange={(e) => setNewAnime({ ...newAnime, releaseYear: e.target.value })}
        />
        
        <input
          type="number"
          className="border p-2 mb-2 w-full"
          placeholder="Episode Count"
          value={newAnime.episodeCount}
          onChange={(e) => setNewAnime({ ...newAnime, episodeCount: e.target.value })}
        />
        <label className="block text-gray-200">Watch Status</label>
        <select
          className="border p-2 mb-2 w-full"
          value={newAnime.watchStatus}
          onChange={(e) => setNewAnime({ ...newAnime, watchStatus: e.target.value })}
        >
          <option value="None">None</option>
          <option value="Watched">Watched</option>
          <option value="To Watch">To Watch</option>
          <option value="Watching">Watching</option>
        </select>
        <button className="p-2 bg-blue-500 text-white w-full" onClick={handleAddAnime}>Add Anime</button>
      </div>
      <ul className="list-disc pl-5 mb-4">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{item.name} - {item.releaseYear} - {item.episodeCount} episodes - {item.watchStatus}</span>
            <div>
              <button
                className="ml-2 p-1 bg-red-500 text-white"
                onClick={() => handleDeleteAnime(item.id)}
              >
                Delete
              </button>
              <span className="mx-2">/</span>
              <button
                className="ml-2 p-1 bg-green-500 text-white"
                onClick={() => handleEditClick(index, item)}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editAnime.index > -1 && (
        <div className="mb-4">
          <h3 className="text-xl mb-2">Edit Anime</h3>
          <label className="block text-gray-200">Name</label>
          <input
            type="text"
            className="border p-2 mb-2 w-full"
            placeholder="Name"
            value={editAnime.value.name}
            onChange={(e) => setEditAnime({ ...editAnime, value: { ...editAnime.value, name: e.target.value } })}
          />
          <label className="block text-gray-200">Release Year</label>
          <input
            type="number"
            className="border p-2 mb-2 w-full"
            placeholder="Release Year"
            value={editAnime.value.releaseYear}
            onChange={(e) => setEditAnime({ ...editAnime, value: { ...editAnime.value, releaseYear: e.target.value } })}
          />
          <label className="block text-gray-200">Episode Count</label>
          <input
            type="number"
            className="border p-2 mb-2 w-full"
            placeholder="Episode Count"
            value={editAnime.value.episodeCount}
            onChange={(e) => setEditAnime({ ...editAnime, value: { ...editAnime.value, episodeCount: e.target.value } })}
          />
          <label className="block text-gray-200">Watch Status</label>
          <select
            className="border p-2 mb-2 w-full"
            value={editAnime.value.watchStatus}
            onChange={(e) => setEditAnime({ ...editAnime, value: { ...editAnime.value, watchStatus: e.target.value } })}
          >
            <option value="None">None</option>
            <option value="Watched">Watched</option>
            <option value="To Watch">To Watch</option>
            <option value="Watching">Watching</option>
          </select>
          <button className="p-2 bg-blue-500 text-white w-full" onClick={handleEditAnime}>
            Update Anime
          </button>
        </div>
      )}
    </div>
  );
}
