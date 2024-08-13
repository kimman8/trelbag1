import Button from './Button';

export default function ButtonGroup({
  markAllAsPacked,
  handleRemoveAllItems,
  handlemarkAllAsUnPacked,
  handleResetToInitial,
}) {
  return (
    <section className="button-group">
      <Button buttonType="secondary" onClick={markAllAsPacked}>
        Mark all as complete
      </Button>
      <Button buttonType="secondary" onClick={handlemarkAllAsUnPacked}>
        Mark all as incomplete
      </Button>
      <Button buttonType="secondary" onClick={handleResetToInitial}>
        Reset to initial
      </Button>
      <Button buttonType="secondary" onClick={handleRemoveAllItems}>
        Remove all items
      </Button>
    </section>
  );
}
