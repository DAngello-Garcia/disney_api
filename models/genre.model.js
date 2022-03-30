module.exports = (sequelize, type) => {
    return sequelize.define('Genre', {
        name: type.STRING,
        image: type.STRING
    })
}