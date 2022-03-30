const Character = require('../config/db').Character

const getAllCharacters = async (req, res) => {
    const character = await Character.findAll({
        attributes: ['name', 'image']
    })
    res.json(character)
}

// router.get('/:characterId', async (req, res) => {
//     const character = await Character.findByPk(req.params.characterId)
//     res.json(character)
// })

const getDetailedCharcater = async (req, res) => {
    const characterAge = req.query.age
    const characterWeight = req.query.weight
    const characterMovies = req.query.movies
    console.log('Este es el peso: ', characterWeight)
    // SELECT * FROM Characters INNER JOIN Movies WHERE name = :name
    const character = await Character.query('SELECT * FROM Characters name = :name', {
        replacements: {name: characterAge},
        type: QueryTypes.SELECT
    })
    res.json(character)
}

const createCharacter = async (req, res) => {
    const character = await Character.create(req.body)
    res.json(character)    
}

const updateCharacter = async (req, res) => {
    await Character.update(req.body, {
        where: {
            id: req.params.characterId
        }
    })
    res.json({success: 'Character modified'})
}

const deleteCharacter = async (req, res) => {
    await Character.destroy({
        where: {
            id: req.params.characterId
        }
    })
    res.json({success: 'Character deleted'})
}

module.exports = {
    getAllCharacters,
    getDetailedCharcater,
    createCharacter,
    updateCharacter,
    deleteCharacter
}