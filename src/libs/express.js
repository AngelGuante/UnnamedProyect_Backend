require('dotenv').config()
const express = require('express')
const app = express()

module.exports = InitExpress = () => app.listen(process.env.SERVER_PORT ?? 3000)