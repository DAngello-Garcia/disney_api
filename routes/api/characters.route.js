const express = require('express')
const QueryTypes = require('sequelize')
const { getCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
} = require('../../controllers/characters.controller')

const router = express.Router()

router.get('/', getCharacter)
router.post('/', createCharacter)
router.put('/:characterId', updateCharacter)
router.delete('/:characterId', deleteCharacter)

module.exports = router