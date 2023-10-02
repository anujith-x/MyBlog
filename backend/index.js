import express from 'express'
import mongoose from 'mongoose'

const app = express()
const PORT = 4999

app.get('/', (request, response) => {
  response.status(201).send("Welcome to the Blog")
})

app.listen(PORT, () => {
  console.log(`App runnin on PORT:${PORT}`);
})