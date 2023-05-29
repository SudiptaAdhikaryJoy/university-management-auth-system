import express, { Application, Request, Response } from 'express';
import { Number } from 'mongoose';
import cors from 'cors';

const app:Application = express()
const port: number = 3000

//middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}))

app.get('/', (req:Request, res: Response) => {
  res.send('Working Successfully');
})

export default app;