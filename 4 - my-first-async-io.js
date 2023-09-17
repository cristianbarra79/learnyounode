// Write a program that uses a single asynchronous filesystem operation to
//   read a file and print the number of newlines it contains to the console
//   (stdout), similar to running cat file | wc -l.

const fs = require("fs");

fs.readFile(process.argv[2], (err, data) => {
  if (err) {
    console.log(err);
  } else {
    let datos = data.toString();
    let array = datos.split("\n");
    console.log(array.length - 1);
  }
});
