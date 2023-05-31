import mongoose from 'mongoose'
import app from './app'
// import config from './config/index'

async function practice() {
  await mongoose.connect(
    `mongodb+srv://university-admin:KEmOHJQIa2g7rpvH@cluster0.e9cyj.mongodb.net/university-management?retryWrites=true&w=majority`
  )
  console.log(`server working on port 5000!`)

  app.listen(5000, () => {
    console.log('server working', 5000)
  })
}
practice()

// try {
//   await mongoose.connect(config.database_url as string)
//   console.log(`♛ DB connected successfully`)
//   app.listen(config.port, () => {
//     console.log(`Application app listening on port ${config.port}`)
//   })
// } catch (error) {
//   console.log(`Failed to connect!`, error)
// }
