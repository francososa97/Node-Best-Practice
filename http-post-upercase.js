const http = require('https');
const map = require('through2-map')

const port =process.argv[2];
const server = http.createServer((req,res) => {
    if(req.method === 'post'){
        req.pipe(map((chunk) => chunk.toString().toUpperCase())).pipe(res);
    }
});

server.listen(port, () => console.log("listning a " + port));