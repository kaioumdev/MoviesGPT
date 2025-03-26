import React, { useRef } from 'react'
import lang from '../utils/languageConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const langKey = useSelector(store => store.config.lang);
    const searchText = useRef(null)
    const handleGptSearchClick = () => {
        console.log(searchText.current.value)
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