import { Server } from "socket.io";

console.log(
  "서버를 키면 이것부터 콘솔로 출력하셈"
);

const io = new Server({
  cors: {
    origin: "http://localhost:3000",
  },
});

io.on("connection", (socket) => {
  console.log("하응.. 연결됨..");

  socket.on("disconnect", () => {
    console.log("하응.. 대화상대 나감..");
  });
});

io.listen(3000);
