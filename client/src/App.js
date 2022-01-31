// import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Card from "./components/card/Card";
import { posts } from "./data";

function App() {
  const [username, setUsername] = useState("");
  const [user, setUser] = useState("");

  return (
    <div className="App">
      <div className="container">
        {user ? (
          <>
            <Navbar />
            {posts.map((post) => {
              return (
                <Card key={post.id} post={post} />
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
