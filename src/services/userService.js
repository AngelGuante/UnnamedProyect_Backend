const { models } = require('../libs/sequelize')
const responseModel = require('../utils/apiResponseModel')

const Create = async (body) => {
    let userCreated = await models.user.create({
        'UserName': body['username'],
        'LoginMethodID': 1
    })
    return responseModel(200, `user created, id: ${userCreated['ID']}`)
}

const GetOne = async id => {
    let user = await models.user.findAll({
        where: {
            ID: id
        }
    })
    return responseModel(201, user)
}

module.exports = {
    Create,
    GetOne
}