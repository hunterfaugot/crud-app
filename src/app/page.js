// src/app/page.js
import { useState } from 'react';

export default function Home() {
  const [items, setItems] = useState([]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold mb-4">Home Page</h1>
      <ul className="list-disc pl-5">
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
}
