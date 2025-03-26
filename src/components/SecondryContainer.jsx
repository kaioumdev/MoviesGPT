import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondryContainer = () => {
    const movies = useSelector(store => store.movies)
    return (
        movies &&
        <div className='bg-black'>
            <div className='-mt-52 pl-12 relative z-28'>
                <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies}></MovieList>
                <MovieList title={"Top Rated"} movies={movies.topRatedMovies}></MovieList>
                <MovieList title={"Popular"} movies={movies.popularMovies}></MovieList>
                <MovieList title={"Up Coming"} movies={movies.nowPlayingMovies}></MovieList>
                <MovieList title={"Horror"} movies={movies.nowPlayingMovies}></MovieList>
            </div>
        </div>
    )
}

export default SecondryContainer