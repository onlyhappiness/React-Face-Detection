// import logo from "./logo.svg";
import "./App.css";
import { useEffect, useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import { posts } from "./data";
import { io } from "socket.io-client";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");
  const [socket, setSocket] = useState(null);

  // 클라이언트에서 서버 socket을 연결
  useEffect(() => {
    // const socket = io("http://localhost:5000");

    // http://localhost:5000에 이벤트를 보냄
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() => {
    // socket이 있을 때 서버에 이벤트를 보냄
    socket?.emit("newUser", user);
    // console.log("socket========", socket);
    // console.log("user======", user);
  }, [socket, user]);

  return (
    <div className="App">
      <div className="container">
        {user ? (
          <>
            <Navbar socket={socket} />
            {posts.map((post) => {
              return (
                <Card
                  key={post.id}
                  post={post}
                  socket={socket}
                  user={user}
                />
              );
            })}
            <span className="username">
              {user}
            </span>
          </>
        ) : (
          <div className="login">
            <input
              type="text"
              placeholder="username"
              onChange={(e) => {
                setUsername(e.target.value);
              }}
            />
            <button
              onClick={() => setUser(username)}
            >
              login
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
