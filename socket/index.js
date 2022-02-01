import { Server } from "socket.io";

console.log("서버가 켜지면 이것부터 실행하셈");

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

let onlineUsers = [];

const addNewUser = (username, socketId) => {
  !onlineUsers.some(
    (user) => user.username === username
  ) && onlineUsers.push({ username, socketId });

  // console.log("어떻게 나옴?", onlineUsers);
};

const removeUser = (socketId) => {
  onlineUsers = onlineUsers.filter(
    (user) => user.socketId !== socketId
  );
};

const getUser = (username) => {
  return onlineUsers.find(
    (user) => user.username === username
  );
  // console.log("보내는 유저 이름", username);
};

io.on("connection", (socket) => {
  socket.on("newUser", (username) => {
    addNewUser(username, socket.id);
    // console.log(
    //   "서버에서 읽은 username=====",
    //   username
    // );
    // console.log(
    //   "서버에서 읽은 socketId---------",
    //   socket.id
    // );
  });

  socket.on(
    "sendNotification",
    ({ senderName, receiverName, type }) => {
      const receiver = getUser(receiverName);

      io.to(receiver.socketId).emit(
        "getNotification",
        {
          senderName,
          type,
        }
      );
    }
  );

  socket.on(
    "sendText",
    ({ senderName, receiverName, text }) => {
      const receiver = getUser(receiverName);
      io.to(receiver.socketId).emit("getText", {
        senderName,
        text,
      });
    }
  );

  socket.on("disconnect", () => {
    removeUser(socket.id);
  });
});

io.listen(5000);
