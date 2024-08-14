export default function Counter({
  totalNumberOfItems,
  totalNumberOfPackedItems,
}) {
  return (
    <p>
      <b>{totalNumberOfPackedItems}</b>/{totalNumberOfItems} items packed
    </p>
  );
}
