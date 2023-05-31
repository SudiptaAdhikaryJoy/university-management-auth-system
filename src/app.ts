import express, { Application, Request, Response } from 'express'
import cors from 'cors'
// import usersService from './app/modules/users/user.service'
import usersRouter from './app/modules/users/users.router'

const app: Application = express()

//middleware
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//Application routes
app.use('/api/v1/users', usersRouter)

// app.get('/', async (req: Request, res: Response) => {
//   // await usersService.createUser({
//   //     id:"999",
//   //     password: '1234',
//   //     role: 'student'
//   // })
//   res.status(200).json({
//     status: 'success',
//   })
// })

app.get('/', async (req: Request, res: Response) => {
  res.send('server working')
})

export default app
