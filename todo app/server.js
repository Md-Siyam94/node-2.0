const http = require('http');

const data = [
    {
        name: "Md Siyam",
        age: 20,
        getJob: false
    },
     {
        name: " redo",
        age: 20,
        getJob: false
    }
]
const server = http.createServer((req, res) => {
    console.log(req.url, req.method);

    if (req.url === "/todos" && req.method === "GET") {
        res.writeHead(200, {
            "content-type": "text/json",
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
