const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = require('../utils/envVariables')
const { Sequelize } = require('sequelize')
const initModels = require('../models/init-models')

const url = `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`
const sequelize = new Sequelize(url)
const models = initModels(sequelize)

module.exports = {
    sequelize,
    models
}