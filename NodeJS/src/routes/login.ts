
import { Request, Response } from 'express';
import { JWT_SECRET } from '../config/envconfig';
import users from '../data/users.json'

function getUser(username:String, password:String){
    for (let i = 0; i < users.length; i++) {
        const user = users[i];
        if (user['username'] === username && user['password'] === password) {
            return { id:user['id'],username:user['username'] }    
        }  
    }
    return null
}

export function loginRoute(req: Request, res: Response) {
    const { username, password } =  req.query
    const jwt = require('jsonwebtoken');

    let user = getUser(username.toString(),password.toString())

    if (user === null) return res.status(403).json({
        "error": "Invalid credentials!"
    })
    
    const token = jwt.sign(user, JWT_SECRET, { expiresIn: "1h" } );

    res.status(200).json({
        "token": token
    })
}