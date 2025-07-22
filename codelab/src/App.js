// App.js atualizado com estilização fiel ao Figma
import { useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import { posts as allPosts } from './data/posts';
import './styles/global.css';

function App() {
  const [search, setSearch] = useState('');

  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <Header />
      <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
      <PostList posts={filteredPosts} />
    </div>
  );
}

export default App;
