import express, { Express, Request, Response} from 'express';
import dotenv from 'dotenv';
import helmet from 'helmet';


dotenv.config()
const app:Express = express()
app.use(helmet())

const port = process.env.PORT

app.use("/", (req:Request, res:Response)=>{
    res.send("Express  + Typescript server is working");
})

app.listen(port, ()=>{
    console.log(`⚡️[server]: Server is running at http://localhost:${port}`);
})