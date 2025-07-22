import './PostCard.css';

export default function PostCard({ post, isFirst }) {
  return (
    <div className={`post-card ${isFirst ? 'active' : ''}`}>
      <p className="post-date">{post.date}</p>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-description">{post.description}</p>
      <div className="post-likes">❤️ {post.likes}</div>
    </div>
  );
}
