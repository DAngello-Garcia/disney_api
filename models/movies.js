module.exports = (sequelize, type) => {
    return sequelize.define('movie', {
        title: type.STRING,
        date_created: type.DATE,
        image: type.STRING, // link
        score: {
            type: type.INTEGER,
            validate: {min: 1, max: 5}
        }
    })
}