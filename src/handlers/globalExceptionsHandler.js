const save = require('../utils/exceptionManage')

module.exports = globaExceptionsHandler = process.on('uncaughtException', exception => {
    save(exception)
    console.clear()
    setInterval(() => 
    process.exit(1), 1000)
})