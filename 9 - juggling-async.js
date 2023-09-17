// This problem is the same as the previous problem (HTTP COLLECT) in that
//   you need to use http.get(). However, this time you will be provided with
//   three URLs as the first three command-line arguments.

const http = require("http");

http
  .get(process.argv[2], (res) => {
    res.setEncoding("utf8");
    let datos = "";
    res.on("data", (d) => {
      datos += d;
    });
    res.on("end", (d) => {
      console.log(datos);
      http
        .get(process.argv[3], (res) => {
          res.setEncoding("utf8");
          datos = "";
          res.on("data", (d) => {
            datos += d;
          });
          res.on("end", (d) => {
            console.log(datos);

            http
              .get(process.argv[4], (res) => {
                res.setEncoding("utf8");
                datos = "";
                res.on("data", (d) => {
                  datos += d;
                });
                res.on("end", (d) => {
                  console.log(datos);
                });
              })
              .on("error", (e) => {
                console.log(e);
              });
          });
        })
        .on("error", (e) => {
          console.log(e);
        });
    });
  })
  .on("error", (e) => {
    console.log(e);
  });
