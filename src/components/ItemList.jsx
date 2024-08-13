export default function ItemList({
  items,
  handlePackedToggle,
  handleRemovedToggle,
}) {
  return (
    <ul>
      {items.map((item) => (
        <Item
          key={item.id}
          item={item}
          onRemoveItem={handleRemovedToggle}
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
