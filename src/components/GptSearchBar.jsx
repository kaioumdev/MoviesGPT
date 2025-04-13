import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'
import openai from '../utils/openai';

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null)
    const handleGptSearchClick = async () => {
        console.log(searchText.current.value)
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
        console.log(gptResults.choices)
    }
    return (
        <div className='pt-[10%] flex justify-center'>
            <form onSubmit={(e) => e.preventDefault()} className='w-1/2 bg-black grid grid-cols-12'>
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