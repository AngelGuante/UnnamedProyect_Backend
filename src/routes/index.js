const user = require('./user')

module.exports = setRoutes = express =>{
    express.use('/Api/user', user)
}