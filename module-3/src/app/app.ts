import express, { Application, Request, Response } from 'express'
const app : Application = express()


app.get('/', (req : Request, res: Response) => {
  res.send('Hello World!')
})
app.get('/todos', async(req: Request, res: Response)=>{
  res.json("get todos")
})



export default app