require('dotenv').config()
const { Sequelize } = require('sequelize')
const initModels = require('../models/init-models')

const url = `postgres://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_HOST}/${process.env.DB_NAME}`
const sequelize = new Sequelize(url)
const models = initModels(sequelize)

module.exports = {
    sequelize,
    models
}