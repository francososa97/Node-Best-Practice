const fs = require('fs');
const fileName = process.argv[2];
fs.readFileSync(fileName,"utf8", (err,content) =>{

    if(err){
        return console.log(err);
    }
    const lines = str.split("\n").length -1;
    console.log(lines);
});
//node my-first-async-io.js texto.txt
