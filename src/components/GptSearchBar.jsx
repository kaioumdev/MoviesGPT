import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useDispatch, useSelector } from 'react-redux'
import openai from '../utils/openai';
import { API_OPTIONS } from '../utils/constants';
import { addGptMovieResult } from '../utils/redux/gptSlice';

const GptSearchBar = () => {
    const dispatch = useDispatch();
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null)

    //search movie in TMDB
    const searchMovieTMDB = async (movie) => {
        const data = await fetch("https://api.themoviedb.org/3/search/movie?query=" + movie + "&include_adult=false&language=en-US&page=1", API_OPTIONS)
        const json = await data.json()
        return json.results;
    }
    const handleGptSearchClick = async () => {
        const gptQuery = "Act as a Movie Recommendation system and suggest some movies for the query: " + searchText.current.value + "Only give me names or 5 movies, comma separated like the example results given ahead. Examples result: 3idiots, 12Fail, Dada, Hi Nanna, PK"
        // const result = await openai.chat.completions.create({
        //     model: 'gpt-4o',
        //     messages: [{ role: 'user', content: searchText.current.value }],
        // });
        // console.log(result.choices);

        const gptResults = await openai.chat.completions.create({
            model: 'gpt-3.5-turbo',
            messages: [
                { role: 'user', content: gptQuery },
            ],
        });
        if (!gptResults.choices) {
            console.log("No results found")
            return
        }
        console.log(gptResults.choices[0]?.message?.content);
        const gptMovies = gptResults.choices[0]?.message?.content.split(",");
        const promiseArray = gptMovies.map((movie) => searchMovieTMDB(movie));
        const tmdbResults = await Promise.all(promiseArray);
        console.log(tmdbResults);
        dispatch(addGptMovieResult({ movieNames: gptMovies, movieResults: tmdbResults }));
    }
    return (
        <div className='pt-[35%] md:pt-[10%] flex justify-center'>
            <form onSubmit={(e) => e.preventDefault()} className='w-full md:w-1/2 bg-black grid grid-cols-12'>
                <input
                    ref={searchText}
                    type="text"
                    className='p-4 m-4 col-span-9 bg-white'
                    placeholder={lang[langKey].gptSearchPlaceholder}
                />
                <button onClick={handleGptSearchClick} className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
                    {lang[langKey].search}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar