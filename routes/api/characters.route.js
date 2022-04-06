const express = require('express')
const { getCharacters,
    getDetailedCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
} = require('../../controllers/characters.controller')

const router = express.Router()

router.get('/', getCharacters)
router.get('/:characterId', getDetailedCharacter)
router.post('/', createCharacter)
router.put('/:characterId', updateCharacter)
router.delete('/:characterId', deleteCharacter)

module.exports = router