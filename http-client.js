const http = require('https');
const url = process.argv[2];

http.get(url,function(response){
    response.setEncoding('utf8');
    //una forma
    /*
    response.on('data',function(data){
        console.log(data);
    });
    */
   //otra mejor forma
   response.on('data',console.log);
   response.on('error',console.log);
}).on("error",console.log);

//node http-client.js  https://www.google.com/?hl=es