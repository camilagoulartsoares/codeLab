// App.js atualizado com estilização fiel ao Figma
import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import { posts as allPosts } from './data/posts';
import './styles/global.css';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [search, setSearch] = useState('');

  const filteredPosts = allPosts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  return (
    <div className="app-container">
      <Header />
      <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
      <PostList posts={filteredPosts} />
    </div>
  );
}

export default App;
