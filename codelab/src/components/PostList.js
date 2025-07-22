import PostCard from './PostCard';

export default function PostList({ posts }) {
  return (
    <section style={{ maxWidth: '700px', margin: '0 auto' }}>
      {posts.map((post, index) => (
        <PostCard key={post.id} post={post} isFirst={index === 0} />
      ))}
    </section>
  );
}
