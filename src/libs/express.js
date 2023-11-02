const { SERVER_PORT } = require('../utils/envVariables')
const setRoutes = require('../routes')
const express = require('express')
const app = express()

app.use(express.json())
setRoutes(app)

module.exports = InitExpress = () => app.listen(SERVER_PORT ?? 3000)