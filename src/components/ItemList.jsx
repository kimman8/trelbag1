import EmptyView from './EmptyView';

export default function ItemList({
  items,
  handlePackedToggle,
  handleRemoveItem,
}) {
  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onRemoveItem={handleRemoveItem}
          onPackedToggle={handlePackedToggle}
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
