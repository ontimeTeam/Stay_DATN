const jwt = require('jsonwebtoken');
const createError = require('http-errors');

const verytyToken = (req, res, next) => {
    const token = req.headers.token;
    if (!token) {
        return next(createError(401, "Your are not aithenticated"))
    }

    jwt.verify(token, process.env.JWT_SECRET_KEY, (err, user) => {
        if(err) return next(createError(403, "token is invalid"));

        req.user = user;
        next();
    })
};

const verifyUser = (req, res, next) => {
    verytyToken(req, res, next, () => {
        if(req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized"))
        }
    })
}

const verifyAdmin = (req, res, next) => {
    verytyToken(req, res, next, () => {
        if(req.user.isAdmin) {
            next();
        } else {
            return next(createError(403, "You are not authorized"))
        }
    })
}