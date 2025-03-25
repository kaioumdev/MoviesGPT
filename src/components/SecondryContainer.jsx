import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondryContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    return (
        movies &&
        <div className='bg-black'>
            <div className='-mt-52 pl-12 relative z-28'>
                <MovieList title={"Now Playing"} movies={movies}></MovieList>
                <MovieList title={"Trending"} movies={movies}></MovieList>
                <MovieList title={"Popular"} movies={movies}></MovieList>
                <MovieList title={"Up Coming"} movies={movies}></MovieList>
                <MovieList title={"Horror"} movies={movies}></MovieList>
            </div>
        </div>
    )
}

export default SecondryContainer