module.exports = (sequelize, type, movieModel, characterModel) => {
    return sequelize.define('CharacterMovies', {
        CharacterId: {
            type: type.INTEGER,
            references: {
              model: movieModel,
              key: 'id'
            }
          },
          MovieId: {
            type: type.INTEGER,
            references: {
              model: characterModel,
              key: 'id'
            }
          }
    })
}