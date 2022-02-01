import React, {
  useEffect,
  useState,
} from "react";
import "./navbar.css";

function Navbar({ socket }) {
  const [notifications, setNotifications] =
    useState([]);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    socket.on("getText", (data) => {
      // setNotification([...notification, data]);
      setNotifications((prev) => [...prev, data]);
    });
  }, [socket]);

  console.log(
    "notification=======",
    notifications
  );

  const displayNotification = ({
    senderName,
    type,
  }) => {
    let action;

    if (type === 1) {
      action = "liked";
    } else if (type === 2) {
      action = "commented";
    } else {
      action = "shared";
    }

    return (
      <span className="notification">{`${senderName} ${action} your post.`}</span>
    );
  };

  const handleRead = () => {
    setNotifications([]);
    setOpen(false);
  };

  return (
    <div className="navbar">
      <span className="logo">Realtime App</span>
      <div className="icons">
        <div
          className="icon"
          onClick={() => setOpen(!open)}
        >
          <i className="far fa-bell iconImg"></i>
          {notifications.length > 0 && (
            <div className="counter">
              {notifications.length}
            </div>
          )}
        </div>

        <div
          className="icon"
          onClick={() => setOpen(!open)}
        >
          <i className="far fa-envelope iconImg"></i>
          {/* <div className="counter">2</div> */}
        </div>
        <div
          className="icon"
          onClick={() => setOpen(!open)}
        >
          <i className="fas fa-cog iconImg"></i>
          {/* <div className="counter">2</div> */}
        </div>
        {open && (
          <div className="notifications">
            {notifications.map((n) =>
              displayNotification(n)
            )}
            <button
              className="nButton"
              onClick={handleRead}
            >
              Mark as read
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
