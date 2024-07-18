const jwt = require('jsonwebtoken')
require('dotenv').config()

const verifyToken = (req, res, next) => {
    const token = req.headers.authorization
    if(!token) return res.status(403).json({message: 'Accès refusé'})
    const extractToken = token.split(' ')[1]
    jwt.verify(extractToken, process.env.JWT_SECRET, (err, decode) => {
        if(err){
            return res.status(401).json({message: 'token invalid', err})
        }
        const {email, id} = decode.data 
        req.id = id
        req.email = email
        next()
    })
}

module.exports = verifyToken