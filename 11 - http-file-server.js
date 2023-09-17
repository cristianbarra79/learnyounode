// Write an HTTP server that serves the same text file for each request it receives.

const http = require("http");
const fs = require("fs");

const server = http.createServer(function (req, res) {
  const readStream = fs.createReadStream(process.argv[3]);
  readStream.on("open", function () {
    readStream.pipe(res);
  });
});

server.listen(process.argv[2]);
