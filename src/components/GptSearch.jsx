import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestion from './GptMovieSuggestion'
import { BG_URL } from '../utils/constants'

const GptSearch = () => {
    return (
        <>
            <div className='fixed -z-10'>
                <img className='h-screen object-cover' src={BG_URL} alt="" />
            </div>
            <div className=''>
                <GptSearchBar></GptSearchBar>
                <GptMovieSuggestion></GptMovieSuggestion>
            </div>
        </>
    )
}

export default GptSearch