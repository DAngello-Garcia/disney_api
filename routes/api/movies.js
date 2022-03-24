const express = require('express')
const Movie = require('../../db.js').Movie

const router = express.Router()

router.get('/', async (req, res) => {
    const movie = await Movie.findAll({
        attributes: ['title', 'image', 'date_created']
    })
    res.json(movie)
})

router.post('/', async (req, res) => {
    const movie = await Movie.create(req.body)
    res.json(movie)
})

router.put('/:movieId', async (req, res) => {
    await Movie.update(req.body, {
        where: {
            id: req.params.movieId
        }
    })
    res.json({success: 'Movie modified'})
})

router.delete('/:movieId', async (req, res) => {
    await Movie.destroy({
        where: {
            id: req.params.movieId
        }
    })
})

module.exports = router