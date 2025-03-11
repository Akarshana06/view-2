import { useState } from 'react';
import LikeButton from './likebutton'; 
import './PostCard.css'; 

function PostCard( {post} ) {
  const [isLiked, setIsLiked] = useState(false);

  
  const toggleLike = () => {
    setIsLiked(!isLiked); 
  };

  return (
    <div className="post-card">
      <div className="profile">
        <img src={post.profileImage} alt={post.username} className="profile-image" />
        <h3 className="username">{post.username}</h3>
      </div>
      <p className="content">{post.content}</p>
      <LikeButton isLiked={isLiked} onToggleLike={toggleLike} />
    </div>
  );
};

export default PostCard;
