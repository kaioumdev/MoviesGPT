import React from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer'
import SecondryContainer from './SecondryContainer'

const Browse = () => {
    useNowPlayingMovies()
    return (
        <div>
            <Header></Header>
            <MainContainer></MainContainer>
            <SecondryContainer></SecondryContainer>
        </div>
    )
}

export default Browse