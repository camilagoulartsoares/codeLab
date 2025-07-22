import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import { posts as allPosts } from './data/posts';

function App() {
  const [search, setSearch] = useState('');

  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ background: '#0f172a', minHeight: '100vh', padding: '2rem' }}>
      <Header />
      <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
      <PostList posts={filteredPosts} />
    </div>
  );
}

export default App;
