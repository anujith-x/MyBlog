import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import { userModel } from './models/userModel.js'

const app = express()
const PORT = 4999
const MongoDbUrl = 'mongodb://127.0.0.1:27017/Blog'

app.use(express.json())

// app.use(cors())
app.use(cors({
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}))


app.get('/', (req, res) => {
  res.status(201).send("Welcome to the Blog")
})

app.post('/signup', async (req,res) => {
  try{
    const newUserDetails = {
      email: req.body.email,
      password: req.body.password
    }
    const newUser = new userModel(newUserDetails)
    const success = newUser.save()
    res.status(201).send(success);
  }catch(err){
    console.log(err);
    res.status(500).send({message: err.message})
  }
})

mongoose.connect(MongoDbUrl)
.then(() => {
  console.log(`Database connection successful`)
  app.listen(PORT, () => {
    console.log(`App runnin on PORT:${PORT}`);
  })
})
.catch((error) => {
  console.log(error);
})