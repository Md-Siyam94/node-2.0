import app from "./app";
const port = 5000
let server;


const bosstrap=async()=>{
    server = app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
}

bosstrap()