import React, { useState } from "react";
import "./card.css";

function Card({ post, socket, user }) {
  const [liked, setLiked] = useState(false);

  const handleNotification = () => {
    setLiked(true);
  };

  return (
    <div className="card">
      <div className="info">
        <img
          src={post.userImg}
          alt=""
          className="userImg"
        />
        <span>{post.fullname}</span>
      </div>
      <img
        src={post.postImg}
        alt=""
        className="postImg"
      />

      <div className="interaction">
        {liked ? (
          <i class="fas fa-heart cardIcon"></i>
        ) : (
          <i
            className="far fa-heart cardIcon"
            onClick={handleNotification}
          ></i>
        )}
        <i className="far fa-comment-dots cardIcon"></i>
        <i className="fas fa-external-link-alt cardIcon"></i>
        <i className="fas fa-info-circle infoIcon"></i>
      </div>
    </div>
  );
}

export default Card;
