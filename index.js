const express = require("express");
const server = express();
const http = require("http").createServer(server);
const PORT = process.env.PORT || 3000;
const login = require("./login");

const path = require("path");

const io = require("socket.io")(http);

server.use("/public", express.static("public"));

server.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

io.on("connection", (socket) => {
  console.log("user connected");
  socket.on("disconnect", () => {
    console.log("goodbye!");
  });
});

http.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
