import { Server } from "socket.io";

console.log(
  "서버를 키면 이것부터 콘솔로 출력하셈"
);

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

let onlineUsers = [];

const addNewUser = (username, socketId) => {
  // some() 메서드는 배열 안의 어떤 요소라도 주어진 판별 함수를 통과하는지 테스트함
  // some 은 일부만 만족해도 true 를 return 한다.
  !onlineUsers.some(
    (user) => user.username === username
  ) && onlineUsers.push({ username, socketId });
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
};

// 연결이 되었을 때
io.on("connection", (socket) => {
  // console.log("하응.. 연결됨..");

  // 서버에 이벤트를 받을 때
  socket.on("newUser", (username) => {
    addNewUser(username, socket.id);
  });

  socket.on("disconnect", () => {
    // console.log("하응.. 대화상대 나감..");
    removeUser(socket.id);
  });
});

io.listen(5000);
