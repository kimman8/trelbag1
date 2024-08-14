import Counter from './Counter';
import Logo from './Logo';

export default function Header({
  totalNumberOfItems,
  totalNumberOfPackedItems,
}) {
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={totalNumberOfItems}
        totalNumberOfPackedItems={totalNumberOfPackedItems}
      />
    </header>
  );
}
