const express = require('express')
const UsersRoutes = require('./routes/users')
const app = express()
const connectDb = require('./db/connection')
require('dotenv').config()
app.use(express.json())
app.use(UsersRoutes)

connectDb();
const port = process.env.PORT

console.log(process.env)
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})