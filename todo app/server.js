const http = require('http');
const path = require('path');
const fs = require('fs');

const filePath = path.join(__dirname, "./db/todo.json")
// console.log(filePath);

const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url === "/todos" && req.method === "GET") {
        const data = fs.readFileSync(filePath, { encoding: "utf-8" })
        // console.log(data);
        res.writeHead(200, {
            "content-type": "application/json",
            // "email" : "siyam@gmail.com"
        })
        // res.setHeaders({"content-type" , "text/json"})
        return res.end(JSON.stringify(data));
    }

    if (req.url === "/todos/create-todo" && req.method === "POST") {
        return res.end("data has created");
    }

    res.end("route not found");
});

server.listen(5000, "localhost", () => {
    console.log("server is running on port 5000");
});
