import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({
  handleAddItem,
  markAllAsPacked,
  handleRemoveAllItems,
  handlemarkAllAsUnPacked,
  handleResetToInitial,
}) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup
        markAllAsPacked={markAllAsPacked}
        handleRemoveAllItems={handleRemoveAllItems}
        handlemarkAllAsUnPacked={handlemarkAllAsUnPacked}
        handleResetToInitial={handleResetToInitial}
      />
    </div>
  );
}
