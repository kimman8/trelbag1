import { useMemo, useState } from 'react';
import EmptyView from './EmptyView';
import Select from 'react-select';
import { useItemsStore } from '../store/itemsStore';

export default function ItemList() {
  const sortingOptions = [
    { value: 'default', label: 'Sort by default' },
    { value: 'packed', label: 'Sort by packed' },
    { value: 'unpacked', label: 'Sort by unpacked' },
  ];
  const [sortBy, setSortBy] = useState('default');
  const items = useItemsStore((state) => state.items);
  const removeItem = useItemsStore((state) => state.removeItem);
  const packedToggle = useItemsStore((state) => state.packedToggle);

  const sortedItems = useMemo(
    () =>
      [...items].sort((a, b) => {
        if (sortBy === 'packed') {
          return b.packed - a.packed;
        }
        if (sortBy === 'unpacked') {
          return a.packed - b.packed;
        }
        return;
      }),
    [items, sortBy]
  );

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}
      {items.length > 0 && (
        <section className="sorting">
          <Select
            defaultValue={sortingOptions[0]}
            options={sortingOptions}
            onChange={(option) => {
              setSortBy(option.value);
            }}
            isClearable={false}
            isSearchable={false}
          />
        </section>
      )}
      {sortedItems.map((item) => (
        <Item
          key={item.id}
          item={item}
          onRemoveItem={removeItem}
          onPackedToggle={packedToggle}
        />
      ))}
    </ul>
  );
}

function Item({ item, onRemoveItem, onPackedToggle }) {
  return (
    <li className="item">
      <label>
        <input
          type="checkbox"
          checked={item.packed}
          onChange={() => onPackedToggle(item.id)}
        />
        {item.name}
      </label>
      <button className="remove" onClick={() => onRemoveItem(item.id)}>
        ❌
      </button>
    </li>
  );
}
