const buttonStyles = {
  success: { background: '#22c55e', color: '#fff' },
  warning: { background: '#facc15', color: '#111827' },
  primary: { background: '#2563eb', color: '#fff' },
  danger: { background: '#ef4444', color: '#fff' },
};

export default function Button({ variant, onClick, children }) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        ...buttonStyles[variant],
        border: 'none',
        padding: '10px 16px',
        borderRadius: '8px',
        cursor: 'pointer',
      }}
    >
      {children}
    </button>
  );
}
