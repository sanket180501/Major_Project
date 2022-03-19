import { Router } from "express";
import { hashSync, compareSync } from "bcrypt";
import jwt from 'jsonwebtoken'
import User from "../models/user.js";

const loginRouter = Router()

loginRouter.post('/login', (req, res) => {
    const { password, username } = req.body

    if (!username || !password) {
       return res.status(400).json({error: 'parameters missing'})
    }
    
    User.findOne({username})
        .then(user => {
            if (compareSync(password, user.password)) {
                const token = jwt.sign({ username: user.username }, 'secretkey', {expiresIn: '1h'})
                return res.json({token})
            }
            res.json({error: 'Incorrect password'})
        })
        .catch((err) => {
            console.log(err)
            res.json({error: 'Username doesn\'t exist'})
        })

})

loginRouter.post('/signup', (req, res) => {
    const { username, password } = req.body

    if (!username || !password) {
       return res.status(400).json({error: 'parameters missing'})
    }

    User.create({username, password: hashSync(password, 10)})
        .then(data => res.json(data))
        .catch(() => res.status(400).json({error: 'Username already exists'}))

})

export default loginRouter
