// Create a program that prints a list of files in a given directory,
//   filtered by the extension of the files. You will be provided a directory
//   name as the first argument to your program (e.g. '/path/to/dir/') and a
//   file extension to filter by as the second argument.

const fs = require("fs");
var path = require("path");
let final = "";

fs.readdir(process.argv[2], (err, data) => {
  if (err) {
    console.log(err);
  } else {
    const ext = `.${process.argv[3]}`;
    for (const archivo of data) {
      if (path.extname(archivo) == ext) {
        final += `${archivo}\n`;
      }
    }
    console.log(final);
  }
});
