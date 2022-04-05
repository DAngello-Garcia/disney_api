const { QueryTypes } = require('sequelize');
const Movie = require('../config/db').Movie
const _ = require('lodash');

const getMovies = async (req, res) => {
    if(_.isEmpty(req.query)) {
        const movie = await Movie.findAll({
            attributes: ['title', 'image', 'date_created']
        })
        res.json(movie)
    } else {
        const query_keys = Object.keys(req.query)
        const query_values = Object.values(req.query)
        // query_keys[0] = name query_keys[1] = genre query_keys[2] = order
        if(query_keys.length == 3) {
            const movie = await Movie.query(
                "SELECT * FROM Movie ORDER BY date_created = :order",
                {
                    replacements: {
                        order: query_values[2]
                    },
                    type: QueryTypes.SELECT
                })
            res.json(movie)
        } else if(query_keys.length == 2) {
            const movie = await Movie.findOne({
                where: {
                    name: query_values[0],
                    genre: query_values[1]
                }
            })
            res.json(movie)
        } else {
            const movie = await Movie.findOne({
                where: {
                    name: query_values[0]
                }
            })
            res.json(movie)
        }
    }
}

const getDetailedMovie = async (req, res) => {
    const movie = await Movie.findOne({
        where: {
            id: req.params.movieId
        }
    })
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