import Counter from './Counter';
import Logo from './Logo';
import { useItemsContext } from '../lib/hooks';

export default function Header() {
  const items = useItemsContext();
  return (
    <header>
      <Logo />
      <Counter
        totalNumberOfItems={items.length}
        totalNumberOfPackedItems={items.filter((item) => item.packed).length}
      />
    </header>
  );
}
