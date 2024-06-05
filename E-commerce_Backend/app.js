const express = require('express')
const cors = require('cors')
const app = express()
const PORT = process.env.PORT || 5000
const { mongoURL } = require('./utils/keys')
const mongoose = require('mongoose')
const cookieParser = require('cookie-parser')
require('dotenv').config()

mongoose.connect(mongoURL)
mongoose.connection.on('connected', () => {
  console.log('Database connected')
})
mongoose.connection.on('error', (err) => {
  console.log('Database not connected:', err)
})

app.use(
  cors({
    origin: 'http://localhost:3000', // Replace with your frontend URL
    credentials: true,
  })
)

app.use(express.json())
app.use(cookieParser())
app.use(require('./routes/auth'))
app.use(require('./routes/adminAuth'))
app.use(require('./routes/addProducts'))
app.use(require('./routes/getProducts'))
app.use(require('./routes/cart'))
app.use(require('./routes/checkOut'))

app.get('/', (req, res) => {
  res.send('Server is Running')
})

app.listen(PORT, () => {
  console.log('Server is Running on Port Number:', PORT)
})
