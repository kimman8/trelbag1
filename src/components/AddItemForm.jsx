import { useRef, useState } from 'react';

export default function AddItemForm({ onAddItem }) {
  const inputRef = useRef();
  const [itemText, setItemText] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!itemText.trim()) {
      alert('Please enter an item');
      inputRef.current.focus();
      return;
    }
    onAddItem(itemText);
    setItemText('');
  };
  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        type="text"
        placeholder="toothbrush"
        onChange={(e) => setItemText(e.target.value)}
        value={itemText}
        autoFocus
      />
      <button type="submit" className="btn">
        Add to list
      </button>
    </form>
  );
}
