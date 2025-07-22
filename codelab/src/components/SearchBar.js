export default function SearchBar({ value, onChange }) {
  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
      <input
        type="text"
        placeholder="Pesquisar no blog"
        value={value}
        onChange={onChange}
        style={{
          width: '100%',
          maxWidth: '500px',
          padding: '0.75rem 1rem',
          borderRadius: '8px',
          border: 'none',
          background: '#1f2937',
          color: '#fff',
        }}
      />
    </div>
  );
}
