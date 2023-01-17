const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    // console.log("auth ", req.headers.authorization)
    // const decodedToken = jwt.verify(req.headers.authorization, 'RANDOM_TOKEN_SECRET');
    // console.log("decodedToken ", decodedToken)
    try {
        const token = req.headers.authorization;
        const decodedToken = jwt.verify(token, 'RANDOM_TOKEN_SECRET');
        // console.log("decodedToken ", decodedToken)
        const userId = decodedToken.userId;
        console.log("userId => ", userId)
        req.auth = { userId: userId };
        return next();
    } catch (error) {
        return res.status(401).json({ error: error })
    }
}