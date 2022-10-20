const movieWS = require('../DAL/moviesWS');
const Movie = require('../models/movieModel');

const getMovies = async () => {
    let { data: movies } = await movieWS.getMovies();
    movies = movies.map((movie) => {
        const show = new Movie({
            name: movie.name,
            genres: movie.genres,
            image: movie.utl,
            premiered: movie.premiered
        })
        show.save();
    });
};
getMovies()
module.exports = {getMovies};


