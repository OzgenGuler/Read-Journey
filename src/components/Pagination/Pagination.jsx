export default function Pagination({ page, totalPages, onChange }) {
  return (
    <div style={{ display: 'flex', gap: '8px', marginTop: '20px' }}>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map(p => (
        <button key={p} disabled={p === page} onClick={() => onChange(p)}>
          {p}
        </button>
      ))}
    </div>
  );
}
