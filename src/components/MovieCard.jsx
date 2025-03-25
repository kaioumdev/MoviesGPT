import React from 'react'
import { IMG_CDN_URL } from '../utils/constants'

const MovieCard = ({ posterPath }) => {
    return (
        <div>
            <div>
                <img src={IMG_CDN_URL + posterPath} alt="movie poster"></img>
            </div>
        </div>
    )
}

export default MovieCard