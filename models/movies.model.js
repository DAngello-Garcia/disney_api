module.exports = (sequelize, type) => {
    return sequelize.define('Movie', {
        title: type.STRING,
        date_created: type.DATE,
        image: type.STRING, // link
        score: {
            type: type.REAL,
            validate: {min: 1, max: 5}
        }
    })
}