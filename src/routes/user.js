const express = require('express')
const router = express.Router()
const service = require('../services/userService')

router.post('/create', async (req, res) => {
    const value = await service.Create(req.body)
    res.status(value['statusCode'])
        .json(value)
})

router.get('/get/:id', async (req, res) => {
    const value = await service.GetOne(req.params.id)
    res.status(value['statusCode'])
        .json(value)
})

module.exports = router