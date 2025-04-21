import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondryContainer = () => {
    const movies = useSelector(store => store.movies)
    console.log(movies);
    return (
        movies &&
        <div className='bg-black'>
            <div className='mt-0 md:-mt-52 pl-4 md:pl-12 relative z-28'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}></MovieList>
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies}></MovieList>
                <MovieList title={"Popular"} movies={movies.popularMovies}></MovieList>
                <MovieList title={"Up Coming"} movies={movies.upComingMovies}></MovieList>
                <MovieList title={"Horror"} movies={movies.nowPlayingMovies}></MovieList>
            </div>
        </div>
    )
}

export default SecondryContainer