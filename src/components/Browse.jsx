import React from 'react'
import Header from './Header'
import { API_OPTIONS } from '../utils/constants'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'

const Browse = () => {
    useNowPlayingMovies()
    return (
        <div>
            <Header></Header>
        </div>
    )
}

export default Browse