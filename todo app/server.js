const http = require('http');

const server =  http.createServer((req, res)=>{
    console.log(req.url, req.method);
    res.end('Welcome to ToDo app')
})

server.listen(5000, '127.0.0.1', ()=>{
    console.log("server is running on port 5000");
})