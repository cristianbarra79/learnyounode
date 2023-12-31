// Write an HTTP server that serves JSON data when it receives a GET request
// to the path '/api/parsetime'. Expect the request to contain a query string
// with a key 'iso' and an ISO-format time as the value.

// For example:
// /api/parsetime?iso=2013-08-10T12:10:15.474Z

// The JSON response should contain only 'hour', 'minute' and 'second'
// properties. For example:
//    {
//      "hour": 14,
//      "minute": 23,
//      "second": 15
//    }
// Add second endpoint for the path '/api/unixtime' which accepts the same
// query string but returns UNIX epoch time in milliseconds (the number of
// milliseconds since 1 Jan 1970 00:00:00 UTC) under the property 'unixtime'.
// For example:
//    { "unixtime": 1376136615474 }

const http = require("http");

const server = http.createServer(function (request, response) {
  if (request.method == "GET") {
    const pedido = new URL(request.url, "http://example.com");

    if (pedido.pathname === "/api/parsetime") {
      const d = new Date(pedido.searchParams.get("iso"));
      const resp = {
        hour: d.getHours(),
        minute: d.getMinutes(),
        second: d.getSeconds(),
      };

      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(resp));
    }

    if (pedido.pathname === "/api/unixtime") {
      const d = new Date(pedido.searchParams.get("iso"));
      var unixTimestamp = Math.floor(new Date(d).getTime());
      const resp = {
        unixtime: unixTimestamp,
      };

      response.writeHead(200, { "Content-Type": "application/json" });
      response.end(JSON.stringify(resp));
    }
  }
});

server.listen(process.argv[2]);
