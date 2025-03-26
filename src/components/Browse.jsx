import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import usePopularMovies from '../hooks/usePopularMovies'
import useTopRatedMovies from '../hooks/useTopRatedMovies'
import useUpComingMovies from '../hooks/useUpComingMovies'
import GptSearch from './GptSearch'

const Browse = () => {
    useNowPlayingMovies()
    usePopularMovies()
    useTopRatedMovies()
    useUpComingMovies()
    return (
        <div>
            <Header></Header>
            <GptSearch></GptSearch>
            <MainContainer></MainContainer>
            <SecondryContainer></SecondryContainer>
        </div>
    )
}

export default Browse