const express = require('express')
const cors = require('cors')
const app = express()
const port = 8000
const userRoute = require('./routes/users')
const connect = require('./DB/connection')
app.use(userRoute)
app.use(cors)
connect()

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})