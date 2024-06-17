// src/app/management/page.js
"use client";

import { useState } from 'react';

export default function Management() {
  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [editItem, setEditItem] = useState({ index: -1, value: '' });

  const addItem = () => {
    setItems([...items, newItem]);
    setNewItem('');
  };

  const deleteItem = (index) => {
    const newItems = items.filter((_, i) => i !== index);
    setItems(newItems);
  };

  const editExistingItem = () => {
    const newItems = items.map((item, index) => (index === editItem.index ? editItem.value : item));
    setItems(newItems);
    setEditItem({ index: -1, value: '' });
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Management Page</h1>
      <div className="mb-4">
        <input
          type="text"
          className="border p-2"
          value={newItem}
          onChange={(e) => setNewItem(e.target.value)}
        />
        <button className="ml-2 p-2 bg-blue-500 text-white" onClick={addItem}>Add Item</button>
      </div>
      <ul className="list-disc pl-5 mb-4">
        {items.map((item, index) => (
          <li key={index} className="flex justify-between items-center">
            <span>{item}</span>
            <div>
              <button
                className="ml-2 p-1 bg-red-500 text-white"
                onClick={() => deleteItem(index)}
              >
                Delete
              </button>
              <button
                className="ml-2 p-1 bg-green-500 text-white"
                onClick={() => setEditItem({ index, value: item })}
              >
                Edit
              </button>
            </div>
          </li>
        ))}
      </ul>
      {editItem.index > -1 && (
        <div className="mb-4">
          <input
            type="text"
            className="border p-2"
            value={editItem.value}
            onChange={(e) => setEditItem({ ...editItem, value: e.target.value })}
          />
          <button className="ml-2 p-2 bg-blue-500 text-white" onClick={editExistingItem}>
            Update Item
          </button>
        </div>
      )}
    </div>
  );
}
