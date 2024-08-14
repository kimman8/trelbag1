import { useState } from 'react';
import BackgroundHeading from './BackgroundHeading';
import Footer from './Footer';
import Header from './Header';
import ItemList from './ItemList';
import Sidebar from './Sidebar';
import { initialItems } from '../lib/constants';

function App() {
  const [items, setItems] = useState(initialItems);

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

  return (
    <>
      <BackgroundHeading />
      <main>
        <Header
          totalNumberOfItems={items.length}
          totalNumberOfPackedItems={items.filter((item) => item.packed).length}
        />
        <ItemList
          items={items}
          handleRemoveItem={handleRemoveItem}
          handlePackedToggle={handlePackedToggle}
        />
        <Sidebar
          handleAddItem={handleAddItem}
          markAllAsPacked={markAllAsPacked}
          handleRemoveAllItems={handleRemoveAllItems}
          handlemarkAllAsUnPacked={handlemarkAllAsUnPacked}
          handleResetToInitial={handleResetToInitial}
        />
      </main>
      <Footer />
    </>
  );
}

export default App;
