module.exports = (sequelize, type) => {
    return sequelize.define('genre', {
        name: type.STRING,
        image: type.STRING
    })
}