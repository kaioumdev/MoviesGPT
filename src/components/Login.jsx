import React from 'react'
import Header from './Header'

const Login = () => {
    return (
        <div>
            <Header></Header>
            <div className='absolute'>
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web_tall_panel/BD-en-20250317-TRIFECTA-perspective_65450c69-6faa-4e0b-885c-8050f6db248f_large.jpg" alt="" />
            </div>
            <form className='w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg opacity-80'>
                <h1 className='font-bold text-3xl py-4'>Sign In</h1>
                <input type="text" placeholder="Email Address" className='p-4 my-4 w-full bg-gray-700' />
                <input type="password" placeholder="Password" className='p-4 my-4 w-full  bg-gray-700' />
                <button className='bg-red-700 p-4 my-6 w-full rounded-lg'>Sign In</button>
                <p className='p-4'>New to MoviesGPT? SignUp Now</p>
            </form>
        </div>
    )
}

export default Login