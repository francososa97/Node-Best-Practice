const net = require('net');
const port =process.argv.slice(2);

//Ejecutar con learnyounode run time-server.js
const server = net.createServer((socket) => {
    const date = new Date();
    const text = date.getFullYear(); 
    + "-"
    + String(date.getMonth() + 1).padStart(2,0);
    + "-"
    + String(date.getDate()).padStart(2,0);
    + " "
    + String(date.getHours()).padStart(2,0);
    + ":"
    + String(date.getMinutes()).padStart(2,0);
    + "\n";

    socket.end(text);
});

server.listen(port);