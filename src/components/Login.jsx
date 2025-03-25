import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidateData } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const navigate = useNavigate();
    const name = useRef(null)
    const email = useRef(null);
    const password = useRef(null);
    const handleButtonClick = () => {
        const message = checkValidateData(email.current.value, password.current.value);
        setErrorMessage(message)
        //show message means show string error message
        if (message) return

        if (!isSignInForm) {
            //sign up logic here
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/browse')
                    // ...
                })
                .catch((error) => {
                    console.log(error);
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)

                    // ..
                });
        } else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    console.log(user);
                    navigate('/browse')
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorCode + "-" + errorMessage)
                });
        }
    }
    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm)
    }
    return (
        <div>
            <Header></Header>
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web_tall_panel/BD-en-20250317-TRIFECTA-perspective_65450c69-6faa-4e0b-885c-8050f6db248f_large.jpg" alt="" />
            </div>
            <form onSubmit={(e) => e.preventDefault()} className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80'>
                <h1 className='font-bold text-3xl py-4'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {
                    !isSignInForm && <input ref={name} type="text" placeholder="Full Name" className='p-4 my-4 w-full bg-gray-700' />
                }

                <input ref={email} type="text" placeholder="Email Address" className='p-4 my-4 w-full bg-gray-700' />
                <input ref={password} type="password" placeholder="Password" className='p-4 my-4 w-full  bg-gray-700' />
                <p className='text-red-500 font-bold text-lg py-2'>{errorMessage}</p>
                <button onClick={handleButtonClick} className='bg-red-700 p-4 my-6 w-full rounded-lg'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p onClick={toggleSignInForm} className='p-4 cursor-pointer'>
                    {isSignInForm ? "New to MoviesGPT? SignUp Now" : "Already register? SignIn now"}
                </p>
            </form>
        </div>
    )
}

export default Login