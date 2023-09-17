// Write an HTTP server that receives only POST requests and converts
// incoming POST body characters to upper-case and returns it to the client.

const http = require("http");

const server = http.createServer(function (request, response) {
  if (request.method == "POST") {
    let body = "";

    request.on("data", function (data) {
      body += data;
    });
    request.on("end", function () {
      response.end(body.toUpperCase());
    });
  }
});

server.listen(process.argv[2]);
