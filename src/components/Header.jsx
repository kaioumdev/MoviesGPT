/* eslint-disable no-unused-vars */
import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addUser, removeUser } from '../utils/redux/userSlice';
import { LOGO } from '../utils/constants';

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch()
    const user = useSelector((store) => store.user)
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
    return (
        <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex justify-between items-center'>
            <img className='w-44' src={LOGO} alt="" />
            {
                user && <div className='flex p-2'>
                    <button className='py-2 px-4 mx-4 my-2 bg-purple-800 text-white rounded-lg'>GPT Search</button>
                    <img className='h-12 w-12' src={user?.photoURL} alt="User" />
                    <button onClick={handleSignOut} className='font-bold text-white'>Sign Out</button>
                </div>
            }
        </div>
    )
}

export default Header