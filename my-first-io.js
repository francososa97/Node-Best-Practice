const fs = require('fs');
const fileName = process.argv[2];
const file = fs.readFileSync(fileName);
const str = file.toString();
const cant = str.split("\n").length -1;
console.log(cant);

//node my-first-io.js texto.txt