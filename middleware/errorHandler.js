const { constants } = require('../constants')
const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 500;
    switch (statusCode) {
        case constants.ValIDATION_ERROR:
            res.json({ title: "Not Found", message: err.message, stakeTrace: err.stack })
            break;
        case constants.UNAUTHORIZED:
            res.json({ title: "UNAUTHORIZED", message: err.message, stakeTrace: err.stack })
            break;
        case constants.ValIDATION_ERROR:
            res.json({ title: "ValIDATION_ERROR", message: err.message, stakeTrace: err.stack })
            break;
        case constants.SERVER_ERROR:
            res.json({ title: "SERVER_ERROR", message: err.message, stakeTrace: err.stack })
            break;
        case constants.FORBIDDEN:
            res.json({ title: "FORBIDDEN", message: err.message, stakeTrace: err.stack })
        default:
            console.log("NO Error, All good !")
            break;
    }
}

module.exports = errorHandler;
