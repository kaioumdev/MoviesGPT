/* eslint-disable no-unused-vars */
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/redux/userSlice';
import { LOGO, SUPPORTED_LANGUAGES } from '../utils/constants';
import { toggleGptSearch } from '../utils/redux/gptSlice';
import { changeLanguage } from '../utils/redux/configSlice';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)
    const gptSearch = useSelector((store) => store.gpt.showGptSearch)
    const handleSignOut = () => {
        signOut(auth).then(() => {
            // Sign-out successful.
        }).catch((error) => {
            navigate("/error")
            // An error happened.
        });
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/auth.user
                const { uid, email, displayName, photoURL } = user;
                dispatch(addUser({ uid, email, displayName, photoURL }))
                navigate('/browse')
            } else {
                // User is signed out
                dispatch(removeUser())
                navigate("/")
            }
        });
        return () => unsubscribe(); // Clean up subscription when component unmounts
    }, [])

    const handleGptSearchClick = () => {
        //Toggle Gpt Search
        dispatch(toggleGptSearch())
    }

    const handleLanguageChange = (e) => {
        dispatch(changeLanguage(e.target.value))
    }
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between items-center'>
            <img className='w-44 mx-auto md:mx-0' src={LOGO} alt="" />
            {
                user && <div className='flex p-2'>
                    {
                        gptSearch && <select onClick={handleLanguageChange} className='p-2 m-2 bg-gray-900 text-white'>
                            {
                                SUPPORTED_LANGUAGES.map(lang => <option key={lang.identifier} value={lang.identifier}>{lang.language}</option>)
                            }
                        </select>
                    }

                    <button onClick={handleGptSearchClick} className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'>
                        {gptSearch ? "Homepage" : "GPT Search"}
                    </button>
                    <img className='h-12 w-12' src={user?.photoURL} alt="User" />
                    <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
                </div>
            }
        </div>
    )
}

export default Header