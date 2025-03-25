import React, { useEffect } from 'react'
import { API_OPTIONS } from '../utils/constants'
import { useDispatch } from 'react-redux'
import { addTrailerVideo } from '../utils/redux/moviesSlice'

const VideoBackground = ({ movieId }) => {
    const dispatch = useDispatch()
    const getMovieVideo = async () => {
        const data = await fetch('https://api.themoviedb.org/3/movie/822119/videos?language=en-US', API_OPTIONS)
        const json = await data.json()
        console.log(json)
        const filterData = json.results.filter((video) => video.type === 'Trailer')
        const trailer = filterData.length ? filterData[0] : json.results[0]
        console.log(trailer)
        dispatch(addTrailerVideo(trailer))
    }

    useEffect(() => {
        getMovieVideo()
    }, [])
    return (
        <div>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/5PSzFLV-EyQ?si=y8S-wnFRS0p9od_X" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin"></iframe>
        </div>
    )
}

export default VideoBackground