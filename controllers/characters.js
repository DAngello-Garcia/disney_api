const express = require('express')
const Character = require('../config/db.js').Character

const router = express.Router()

router.get('/', async (req, res) => {
    const character = await Character.findAll({
        attributes: ['name', 'image']
    })
    res.json(character)
})

router.post('/', async (req, res) => {
    const character = await Character.create(req.body)
    res.json(character)    
})

router.put('/:characterId', async (req, res) => {
    await Character.update(req.body, {
        where: {
            id: req.params.characterId
        }
    })
    res.json({success: 'Character modified'})
})

router.delete('/:characterId', async (req, res) => {
    await Character.destroy({
        where: {
            id: req.params.characterId
        }
    })
    res.json({success: 'Character deleted'})
})

module.exports = router