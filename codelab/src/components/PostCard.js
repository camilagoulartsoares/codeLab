export default function PostCard({ post, isFirst }) {
  return (
    <div
      style={{
        border: isFirst ? '1px solid #f87171' : '1px solid #374151',
        borderRadius: '10px',
        padding: '1rem',
        marginBottom: '1rem',
        backgroundColor: '#111827',
        position: 'relative',
      }}
    >
      <p style={{ color: '#f87171', fontSize: '0.875rem', marginBottom: '0.5rem' }}>
        {post.date}
      </p>
      <h2 style={{ color: '#fff', fontSize: '1rem' }}>{post.title}</h2>
      <p style={{ color: '#9ca3af', fontSize: '0.875rem' }}>{post.description}</p>
      <div style={{ position: 'absolute', right: '1rem', bottom: '1rem' }}>
        ❤️ {post.likes}
      </div>
    </div>
  );
}
