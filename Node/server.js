const http = require('http');

const server = http.createServer((req,res)=>{
    res.end("Hello From the server");
});

server.listen(8000,"127.0.0.1",()=>{
    console.log('Listening port ', 8000);
})