// Write a TCP time server!

// Your server should listen to TCP connections on the port provided by the
// first argument to your program. For each connection you must write the
// current date & 24 hour time in the format:
//    "YYYY-MM-DD hh:mm"

const net = require("net");
const date = new Date();

const server = net.createServer(function (socket) {
  const ceros = date.getDate() > 9 ? date.getDate() : `0${date.getDate()}`;
  const fecha = `${date.getFullYear()}-${
    date.getMonth() + 1
  }-${ceros} ${date.getHours()}:${date.getMinutes()}\n`;

  socket.write(fecha);
  socket.end();
});

server.listen(process.argv[2]);
