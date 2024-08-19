import { createContext, useEffect, useState } from 'react';
import { initialItems } from '../lib/constants';

export const ItemsContext = createContext();
export default function ItemsContextProvider({ children }) {
  // Retrieve items from localStorage or fall back to initialItems
  const savedItems = JSON.parse(localStorage.getItem('items'));
  const [items, setItems] = useState(savedItems || initialItems);

  const handleAddItem = (newItemText) => {
    const newItem = {
      id: Date.now(),
      name: newItemText,
      packed: false,
    };
    const newItems = [...items, newItem];
    setItems(newItems);
  };

  const markAllAsPacked = () => {
    const newItems = items.map((item) => ({ ...item, packed: true }));
    setItems(newItems);
  };

  const handleRemoveAllItems = () => {
    setItems([]);
  };

  const handleRemoveItem = (id) => {
    const newItems = items.filter((item) => item.id !== id);
    setItems(newItems);
  };

  const handlemarkAllAsUnPacked = () => {
    const newItems = items.map((item) => ({ ...item, packed: false }));
    setItems(newItems);
  };

  const handleResetToInitial = () => {
    setItems(initialItems);
  };

  const handlePackedToggle = (id) => {
    const newItems = items.map((item) => {
      if (item.id === id) {
        return { ...item, packed: !item.packed };
      }
      return item;
    });
    setItems(newItems);
  };
  // Save items to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(items));
  }, [items]);

  return (
    <ItemsContext.Provider
      value={{
        items,
        handleAddItem,
        markAllAsPacked,
        handleRemoveAllItems,
        handleRemoveItem,
        handlemarkAllAsUnPacked,
        handleResetToInitial,
        handlePackedToggle,
      }}
    >
      {children}
    </ItemsContext.Provider>
  );
}
