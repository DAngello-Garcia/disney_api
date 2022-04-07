const express = require('express')
const { getCharacters,
    getDetailedCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
} = require('../../controllers/characters.controller')
const authMiddleare = require('../../middlewares/auth.middleware')

const router = express.Router()

router.get('/', authMiddleare, getCharacters)
router.get('/:characterId', authMiddleare, getDetailedCharacter)
router.post('/', authMiddleare, createCharacter)
router.put('/:characterId', authMiddleare, updateCharacter)
router.delete('/:characterId', authMiddleare, deleteCharacter)

module.exports = router