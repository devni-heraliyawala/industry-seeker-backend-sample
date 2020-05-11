const express = require('express')

// require('./db/mongoose')

const { companyRoutes,
  helpdeskRoutes,
  newsRoutes,
  paymentRoutes,
  userRoutes } = require('./routes')

const app = express()

//Convert incoming JSON strings to JSON objects for every request
app.use(express.json())

// Registering routers with Express
app.use('/api/companies', companyRoutes)
app.use('/api/helpdesk', helpdeskRoutes)
app.use('/api/news', newsRoutes)
app.use('/api/payment', paymentRoutes)
app.use('/api/user', userRoutes)

//Reduce file size before sending them to the web browser. reduce latency and lag
// app.use(compression())

module.exports = app