import { useContext } from 'react';
import Button from './Button';
import { ItemsContext } from '../contexts/ItemsContextProvider';

export default function ButtonGroup() {
  const {
    markAllAsPacked,
    handlemarkAllAsUnPacked,
    handleResetToInitial,
    handleRemoveAllItems,
  } = useContext(ItemsContext);
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
