import { JWT_SECRET } from "../config/envconfig"

export function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    
    if(token == null) return res.sendStatus(401)

    const jwt = require('jsonwebtoken')

    jwt.verify(token,JWT_SECRET, (err,user)=> {
        if(err) return res.sendStatus(403)
        req.user = user
        next()
    })
}