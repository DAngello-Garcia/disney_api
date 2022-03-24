module.exports = (sequelize, type) => {
    return sequelize.define('character', {
        name: type.STRING,
        age: type.INTEGER,
        weight: type.REAL,
        history: type.TEXT,
        image: type.STRING
    })
}