import jwt from "jsonwebtoken";

function authentication (req, res, next) {
    const token = req.headers.token;
    if(!token) {
        return res.send({message: 'User not logged in.'})
    }
    const decode = jwt.verify(token, 'secret');

    req.body.user_id = decode;
    next();
}