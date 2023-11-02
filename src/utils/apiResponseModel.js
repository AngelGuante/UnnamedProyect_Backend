module.exports = responseModel = (status, message) => {
    const statusCode = {
        200: 'OK',
        201: 'Created',
    }

    return {
        'statusCode': status,
        'title': statusCode[status],
        'message': message
    }
}