const AppError = require("../utils/AppError")

// roleVerify = admin or customer or sale

function verifyUserAuthorization(roleToVerify = ['admin']) {
    return (req, res, next) => {
        const { role } = req.user

        if (!roleToVerify.includes(role)) {
            throw new AppError('Unauthorized', 401)
        }

        return next();
    }
}

module.exports = verifyUserAuthorization