"use client";

import { createContext, useState, useContext } from 'react';

const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
  const [items, setItems] = useState([
    {
      name: 'Sample Anime',
      releaseYear: 2020,
      episodeCount: 12,
      watchStatus: 'Watched',
    },
  ]);

  return (
    <ItemsContext.Provider value={{ items, setItems }}>
      {children}
    </ItemsContext.Provider>
  );
};

export const useItems = () => useContext(ItemsContext);

