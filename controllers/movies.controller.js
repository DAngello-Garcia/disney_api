const Movie = require('../models/movies.model')
const Character = require('../models/characters.model')

const getMovies = async (req, res) => {
    try {
        const { title, genre, order } = req.query
        const query = {}
        const order_query = []
    
        if(title) {
            query.title = title
        }
        if(genre) {
            query.genre = genre
        }
        if(order) {
            if(order === 'ASC') {
                query.order = ['createdAt', 'ASC']
            } else {
                query.order = ['createdAt', 'DESC']
            }
        }
        if(!query) {
            const movie = await Movie.findAll({
                attributes: ['title', 'image', 'date_created']
            })
            return res.status(200).json(movie)
        }

        const movie = await Movie.findAll({
            where: query,
            order: order_query
        })
        return res.status(200).json(movie)
    } catch(error) {
        return res.status(400).json({ error: error })
    }

}

const getDetailedMovie = async (req, res) => {
    const movie = await Movie.findByPk(req.params.characterId, {
        include: [{
            model: Character,
            as: "Characters",
            required: true,
            attributes: []
          }]
    })
    res.status(200).json(movie)
}

const createMovie = async (req, res) => {
    const movie = await Movie.create(req.body)
    res.json(movie)
}

const updateMovie = async (req, res) => {
    await Movie.update(req.body, {
        where: {
            id: req.params.movieId
        }
    })
    res.json({success: 'Movie modified'})
}

const deleteMovie = async (req, res) => {
    await Movie.destroy({
        where: {
            id: req.params.movieId
        }
    })
}

module.exports = {
    getMovies,
    getDetailedMovie,
    createMovie,
    updateMovie,
    deleteMovie
}