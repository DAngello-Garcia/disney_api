const express = require('express')
const QueryTypes = require('sequelize')
const { getAllCharacters,
    getDetailedCharcater,
    createCharacter,
    updateCharacter,
    deleteCharacter
} = require('../../controllers/characters.controller')

const router = express.Router()

router.get('/', getAllCharacters)
router.get('/:name', getDetailedCharcater)
router.post('/', createCharacter)
router.put('/:characterId', updateCharacter)
router.delete('/:characterId', deleteCharacter)

module.exports = router