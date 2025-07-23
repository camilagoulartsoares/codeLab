import { useEffect, useState } from 'react';
import Header from './components/Header';
import SearchBar from './components/SearchBar';
import PostList from './components/PostList';
import './styles/global.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';

const API_URL = 'https://tech-news-api-nlji.onrender.com/api/news';

function App() {
  const [search, setSearch] = useState('');
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const filteredPosts = posts.filter(post =>
    post.title.toLowerCase().includes(search.toLowerCase())
  );

  useEffect(() => {
    AOS.init({ duration: 800, once: true });
  }, []);

  useEffect(() => {
    async function fetchNews() {
      try {
        const response = await axios.get(API_URL);
        setPosts(response.data);
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchNews();
  }, []);

  return (
    <div className="app-container">
      <Header />
      <SearchBar value={search} onChange={e => setSearch(e.target.value)} />
      {loading ? <p>Carregando notícias...</p> : <PostList posts={filteredPosts} />}
    </div>
  );
}

export default App;
