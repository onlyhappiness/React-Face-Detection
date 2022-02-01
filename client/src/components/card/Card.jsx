import React, { useState } from "react";
import "./card.css";

function Card({ post, socket, user }) {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    type === 1 && setLiked(true);
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

  console.log("socket=======", socket);

  console.log("소켓 id==========", socket.id);

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
          <i className="fas fa-heart cardIcon"></i>
        ) : (
          <i
            className="far fa-heart cardIcon"
            onClick={() => handleNotification(1)}
          ></i>
        )}
        <i
          className="far fa-comment-dots cardIcon"
          onClick={() => handleNotification(2)}
        ></i>
        <i
          className="fas fa-external-link-alt cardIcon"
          onClick={() => handleNotification(3)}
        ></i>
        <i className="fas fa-info-circle infoIcon"></i>
      </div>
    </div>
  );
}

export default Card;
