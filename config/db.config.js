const characterModel = require('../models/characters.model')
const movieModel = require('../models/movies.model')
const genreModel = require('../models/genre.model')
const User = require('../models/users.model')
const Character = require('../models/characters.model')
const Movie = require('../models/movies.model')
const Genre = require('../models/genre.model')

async function configureDB(db) {
    try {
        await db.authenticate() //verifica la conexión de la db
        Genre.hasMany(Movie)
        Movie.belongsTo(Genre)
        Movie.belongsToMany(Character, 
            { through: 'Character_Movies' })
        Character.belongsToMany(Movie, 
            { through: 'Character_Movies' })
        await db.sync()       
    } catch(error) {
        console.log("Database connection error: " + error)
    }
}

async function testData(db) {
    await db.sync({ alter: true })
    //await User.create({ username: "garcia.dangello@gmail.com", password: "password"})
    const char1 = await Character.create({
            name: "Ariel",
            age: 15,
            weight: 40.1,
            history: "Hija del Rey Tritón",
            image: "https://en.wikipedia.org/wiki/Ariel_(The_Little_Mermaid)#/media/File:Ariel_disney.png"
        }
    )
    const char2 = await Character.create({
            name: "Sebastian",
            age: 35,
            weight: 13.6,
            history: "Cangrejo rojo con acento jamaicano",
            image: "https://disney.fandom.com/wiki/Sebastian?file=Profile_-_Sebastian.jpeg"
        }
    )
    const char3 = await Character.create({
            name: "Mickey",
            age: 25,
            weight: 52,
            history: "Ratón que habla",
            image: "https://en.wikipedia.org/wiki/Mickey_Mouse#/media/File:Mickey_Mouse.png"
        }
    )
    const mov1 = await Movie.create({
        title: "La Sirenita",
        date_created: "1989-12-02",
        image: "https://en.wikipedia.org/wiki/Ariel_(The_Little_Mermaid)#/media/File:Ariel_disney.png",
        score: 4
    })
    const mov2 = await Movie.create({
        title: "Mickey, Donald, Goofy: Los Tres Mosqueteros",
        date_created: "2004-07-15",
        image: "https://en.wikipedia.org/wiki/Mickey,_Donald,_Goofy:_The_Three_Musketeers#/media/File:Mickey,_Donald,_Goofy_-_The_Three_Musketeers_poster.jpg",
        score: 4.3
    })
    const gen1 = await Genre.create({
        name: "Aventura",
        image: "https://images.pexels.com/photos/4840229/pexels-photo-4840229.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    })
    const gen2 = await Genre.create({
        name: "Animación",
        image: "https://images.pexels.com/photos/42415/pexels-photo-42415.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
    })

    await char1.addMovie([mov1, mov2])
    await char2.addMovie(mov1)
    await char3.addMovie(mov2)
    await char1.save()
    await char2.save()
    await char3.save()

    await mov1.setGenre(gen1)
    await mov2.setGenre(gen2)
    await mov1.save()
    await mov2.save()
}

module.exports = {
    configureDB,
    testData
}