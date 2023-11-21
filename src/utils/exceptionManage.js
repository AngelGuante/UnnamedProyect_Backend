

module.exports = save = exception => {
    var outputLocation = require('path').resolve(__dirname, 'exceptions.json');
    require('fs').writeFile(outputLocation, JSON.stringify({ 'name': exception.name, 'message': exception.message, 'stack': exception.stack.split('\n'), 'cause': exception['cause'] }, null, 4), function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log("JSON saved to " + outputLocation);
        }
    });
}