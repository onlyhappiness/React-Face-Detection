## 참고

### socket server
https://socket.io/docs/v4/server-initialization/

---

## 홓! 포트 3000 중복되요!
> 이거 참고 ㄱㄱ

https://socket.io/docs/v4/client-initialization/

---


## socket server
### 클라이언트에 이벤트를 보낼 때
> io

모든 클라이언트에 보냄

> io.emit
> io.to(socketId).emit

한 클라이언트에게만 보냄

### 클라이언트에서 이벤트를 가져올 때
> socket.on



## Client Side
### use socket

### 서버에 이벤트를 보낼 때
> socket.emit

### 서버에서 이벤트를 받을 때
> socket.on