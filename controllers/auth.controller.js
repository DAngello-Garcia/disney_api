const jwt = require('jsonwebtoken')
const User = require('../models/users.model')
const _ = require('lodash')
require('dotenv').config()

const authLogin = async (req, res) => {
    const { username, password } = req.body

    if(_.isEmpty(username) || _.isEmpty(password)) {
        return res.status(400).json({
            error: "Username and password required"
        })
    }

    try {
        const user = await User.findOne({
            where: {
                username: username
            }
        })

        if(!user) {
            return res.status(404).json({
                error: "Can not found username"
            })
        }

        if(await user.validatePassword(password)) {
            const userForToken = {
                id: user.id,
                username: user.username
            }
            const token = jwt.sign(
                userForToken,
                process.env.JWT_SECRET,
                {
                    expiresIn: 60 * 60 * 24
                }
            )
            return res.status(200).json({
                message: "Logged in",
                user: {
                    id: user.id,
                    username: user.username
                },
                token
            })
        } else {
            return res.status(404).json({
                error: "Password invalid"
            })
        }

    } catch(error) {
        return res.status(500).json({ error: error })
    }

}

const authRegister = async (req, res) => {

}



module.exports = {
    authLogin
}