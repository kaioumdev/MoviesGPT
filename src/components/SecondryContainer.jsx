import React from 'react'
import { useSelector } from 'react-redux'
import MovieList from './MovieList'

const SecondryContainer = () => {
    const movies = useSelector(store => store.movies?.nowPlayingMovies)
    return (
        <div>
            <MovieList title={"Now Playing"} movies={movies}></MovieList>
        </div>
    )
}

export default SecondryContainer