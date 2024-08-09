import Button from './Button';

export default function ButtonGroup() {
  const secondaryButtons = [
    'Mark all as complete',
    'Mark all as incomplete',
    'Reset to initial',
    'Remove all items',
  ];
  return (
    <section className="button-group">
      {secondaryButtons.map((button) => (
        <Button key={button} type={'secondary'}>
          {button}
        </Button>
      ))}
    </section>
  );
}
