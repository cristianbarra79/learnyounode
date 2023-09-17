// Write a program that performs an HTTP GET request to a URL provided to you
//   as the first command-line argument. Collect all data from the server (not
//   just the first "data" event) and then write two lines to the console
//   (stdout).

const http = require("http");

http
  .get(process.argv[2], (res) => {
    res.setEncoding("utf8");
    let datos = "";
    res.on("data", (d) => {
      datos += d;
    });
    res.on("end", (d) => {
      console.log(datos.length);
      console.log(datos);
    });
  })
  .on("error", (e) => {
    console.log(e);
  });
