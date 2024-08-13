import Button from './Button';

export default function ButtonGroup({
  markAllAsPacked,
  handleRemoveAllItems,
  handlemarkAllAsUnPacked,
  handleResetToInitial,
}) {
  const secondaryButtons = [
    { text: 'Mark all as complete', onClick: markAllAsPacked },
    { text: 'Mark all as incomplete', onClick: handlemarkAllAsUnPacked },
    { text: 'Reset to initial', onClick: handleResetToInitial },
    { text: 'Remove all items', onClick: handleRemoveAllItems },
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map(({ text, onClick }) => (
        <Button
          key={text + onClick.toString()}
          buttonType="secondary"
          onClick={onClick}
        >
          {text}
        </Button>
      ))}
    </section>
  );
}
