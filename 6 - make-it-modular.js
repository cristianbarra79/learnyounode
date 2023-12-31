// Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. The first argument is the
//   directory name and the second argument is the extension filter. Print the
//   list of files (one file per line) to the console. You must use
//   asynchronous I/O.

const mymodule = require("./mymodule.js");

mymodule(process.argv[2], process.argv[3], function (err, data) {
  if (err) {
    return console.error("error:", err);
  }
  data.map((e) => console.log(e));
});
