import React, {
  useEffect,
  useState,
} from "react";
import "./navbar.css";

function Navbar({ socket }) {
  const [notification, setNotification] =
    useState([]);

  useEffect(() => {
    socket.on("getNotification", (data) => {
      // setNotification([...notification, data]);
      setNotification((prev) => [...prev, data]);
    });
  }, [socket]);

  console.log(
    "notification=======",
    notification
  );

  return (
    <div className="navbar">
      <span className="logo">Realtime App</span>
      <div className="icons">
        <div className="icon">
          <i className="far fa-bell iconImg"></i>
          <div className="counter">2</div>
        </div>

        <div className="icon">
          <i className="far fa-envelope iconImg"></i>
          <div className="counter">2</div>
        </div>
        <div className="icon">
          <i className="fas fa-cog iconImg"></i>
          <div className="counter">2</div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
