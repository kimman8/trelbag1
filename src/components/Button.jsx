export default function Button({ children, buttonType, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`btn ${buttonType === 'secondary' ? 'btn--secondary' : ''}`}
    >
      {children}
    </button>
  );
}
