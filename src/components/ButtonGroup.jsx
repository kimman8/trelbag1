import Button from './Button';
import { secondaryButtons } from '../lib/constants';

export default function ButtonGroup({ markAllAsPacked }) {
  const handleButtonClick = (button) => {
    switch (button) {
      case 'Mark all as complete':
        markAllAsPacked();
        break;
      case 'Mark all as incomplete':
        console.log('Mark all as incomplete');
        break;
      case 'Reset to initial':
        console.log('Reset to initial');
        break;
      case 'Remove all items':
        console.log('Remove all items');
        break;
      default:
        console.log('Unknown button');
    }
  };
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button
          key={button}
          type={'secondary'}
          onClick={() => handleButtonClick(button)}
        >
          {button}
        </Button>
      ))}
    </section>
  );
}
