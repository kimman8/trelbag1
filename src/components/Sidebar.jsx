import AddItemForm from './AddItemForm';
import ButtonGroup from './ButtonGroup';
import { useItemsStore } from '../store/itemsStore';

export default function Sidebar() {
  const addItem = useItemsStore((state) => state.addItem);
  return (
    <div className="sidebar">
      <AddItemForm onAddItem={addItem} />
      <ButtonGroup />
    </div>
  );
}
