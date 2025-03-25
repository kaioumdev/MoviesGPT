import React from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'
import usePopularMovies from '../hooks/usePopularMovies'

const Browse = () => {
    useNowPlayingMovies()
    usePopularMovies()
    return (
        <div>
            <Header></Header>
            <MainContainer></MainContainer>
            <SecondryContainer></SecondryContainer>
        </div>
    )
}

export default Browse