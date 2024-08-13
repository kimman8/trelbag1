import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';

export default function Sidebar({ handleAddItem, markAllAsPacked }) {
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={handleAddItem} />
      <ButtonGroup markAllAsPacked={markAllAsPacked} />
    </div>
  );
}
