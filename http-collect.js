const http = require('https');
const url = process.argv[2];

http.get(url,function(response){
    let result = "";
    response.setEncoding('utf8');
    response.on('data',function(chunk){ // un chunck son partes de string
        result += chunk;
   });
   response.on('end',()=> console.log(result.length)); // los on son metodos de primer orden que funcionan como listenrs.A estos se le pasa que lisener(start,end,succes,error) queremos escuchar y la segunda prop le pasamos lo que queremos que haga cuando eso suceda
}).on("error",console.log);

//node http-client.js  https://www.google.com/?hl=es