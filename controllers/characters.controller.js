const Character = require('../models/characters.model')
const Movie = require('../models/movies.model')

const getCharacters = async (req, res) => {
    try {
        const { name, age, movieId } = req.query
        const query = {}
    
        if(name) {
            query.name = name
        }
        if(age) {
            query.age = age
        }
        if(movieId) {
            query.movieId = movieId
        }
        if(!query) {
            const character = await Character.findAll({
                attributes: ['name', 'image']
            })
            return res.status(200).json(character)
        }
    
        const character = await Character.findAll({
            where: query
        })
        return res.status(200).json(character)
    } catch(error) {
        return res.status(400).json({ error: error })
    }
    
}

const getDetailedCharacter = async (req, res) => {
    const character = await Character.findByPk(req.params.characterId, {
        include: [{
            model: Movie,
            as: "Movies",
            required: true,
            attributes: []
          }]
    })
    res.status(200).json(character)
    
}

const createCharacter = async (req, res) => {
    try {
        const character = await Character.create(req.body)
        return res.status(201).json(character)
    } catch(error) {
        return res.status(400).json({ error: error })
    }
}

const updateCharacter = async (req, res) => {
    try {
        try {
            await Character.findByPk(req.params.characterId)
        } catch(error) {
            return res.status(400).json({ error: error })
        }
        await Character.update(req.body, {
            where: {
                id: req.params.characterId
            }
        })
        return res.status(200).json({success: 'Character modified'})
    } catch(error) {
        return res.status(400).json({ error: error })
    }
}

const deleteCharacter = async (req, res) => {
    try {
        try {
            await Character.findByPk(req.params.characterId)
        } catch(error) {
            return res.status(400).json({ error: error })
        }
        await Character.destroy({
            where: {
                id: req.params.characterId
            }
        })
        return res.status(200).json({success: 'Character deleted'})
    } catch(error) {
        return res.status(400).json({ error: error })
    }
}

module.exports = {
    getCharacters,
    getDetailedCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
}