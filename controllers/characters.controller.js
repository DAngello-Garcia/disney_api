const Character = require('../models/characters.model')
const Movie = require('../models/movies.model')
const _ = require('lodash')

const getCharacters = async (req, res) => {
    if(_.isEmpty(req.query)) {
        const character = await Character.findAll({
            attributes: ['name', 'image']
        })
        res.json(character)
    } else {
        const query_keys = Object.keys(req.query)
        const query_values = Object.values(req.query)
        // query_keys[0] = name query_keys[1] = age query_keys[2] = MovieId
        if(query_keys.length == 3) {
            const character = await Character.findOne({
                where: {
                    name: query_values[0],
                    age: query_values[1],
                    MovieId: query_values[2]
                }
            })
            res.json(character)
        } else if(query_keys.length == 2) {
            const character = await Character.findOne({
                where: {
                    name: query_values[0],
                    age: query_values[1]
                }
            })
            res.json(character)
        } else {
            const character = await Character.findOne({
                where: {
                    name: query_values[0]
                }
            })
            res.json(character)
        }
    }
}

const getDetailedCharacter = async (req, res) => {
    const character = await Character.findByPk(req.params.characterId, {
        include: [{
            model: Movie,
            required: true,
            attributes: [
                'title'
            ]
          }]
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
    getCharacters,
    getDetailedCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
}