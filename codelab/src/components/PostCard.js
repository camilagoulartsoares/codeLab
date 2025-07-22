import { useState } from 'react';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './PostCard.css';

export default function PostCard({ post, isFirst }) {
  const [liked, setLiked] = useState(false);

  return (
<div className="post-card" data-aos="fade-up">
      <div className="post-like" onClick={() => setLiked(!liked)}>
        {liked ? <AiFillHeart className="icon liked" /> : <AiOutlineHeart className="icon" />}
        <span>{liked ? post.likes + 1 : post.likes}</span>
      </div>

      <p className="post-date">{post.date}</p>
      <h2 className="post-title">{post.title}</h2>
      <p className="post-description">{post.description}</p>
    </div>
  );
}
