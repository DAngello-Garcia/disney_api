const express = require('express')
const { getCharacters,
    getDetailedCharacter,
    createCharacter,
    updateCharacter,
    deleteCharacter
} = require('../../controllers/characters.controller')
const { authMiddleware } = require('../../middlewares/auth.middleware')

const router = express.Router()

router.get('/', authMiddleware, getCharacters)
router.get('/:characterId', authMiddleware, getDetailedCharacter)
router.post('/', authMiddleware, createCharacter)
router.put('/:characterId', authMiddleware, updateCharacter)
router.delete('/:characterId', authMiddleware, deleteCharacter)

module.exports = router