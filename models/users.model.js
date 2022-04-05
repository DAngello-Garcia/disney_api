const { DataTypes } = require('sequelize')
const bcrypt = require('bcrypt')
const db = require('../config/db')

const User = db.define(
    'User',
    {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true,
            validate: {
                isEmail: {
                    msg: "Must be an email"
                }
            }
        },
        password: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        hooks: {
            beforeCreate: async function(user) {
                user.password = await bcrypt.hash(user.password, 10)
            }
        }
    }
    
)

User.prototype.validatePassword = async function(password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = User