export default function Button({ children, type }) {
  return (
    <button
      type={type}
      className={`btn ${type === 'secondary' ? 'btn--secondary' : ''}`}
    >
      {children}
    </button>
  );
}
