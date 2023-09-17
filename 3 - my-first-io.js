// Write a program that uses a single synchronous filesystem operation to
//   read a file and print the number of newlines (\n) it contains to the
//   console (stdout), similar to running cat file | wc -l.

const fs = require("fs");
const archivo = fs.readFileSync(process.argv[2]);
let datos = archivo.toString();
let array = datos.split("\n");

console.log(array.length - 1);
