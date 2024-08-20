import { useItemsStore } from '../store/itemsStore';
import Button from './Button';

export default function ButtonGroup() {
  const markAllAsPacked = useItemsStore((state) => state.markAllAsPacked);
  const markAllAsUnPacked = useItemsStore((state) => state.markAllAsUnPacked);
  const resetToInitial = useItemsStore((state) => state.resetToInitial);
  const removeAllItems = useItemsStore((state) => state.removeAllItems);
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={markAllAsPacked}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={markAllAsUnPacked}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={resetToInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={removeAllItems}>
        Remove all items
      </Button>
    </section>
  );
}
