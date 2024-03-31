import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom'
import { UserAuth } from '../context/AuthContext'
import { Helmet } from "react-helmet-async"

const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const {user,signUp} = UserAuth()
    const navigate = useNavigate()

    const handleSubmit = async (e)=>{
        e.preventDefault();
        try{
            await signUp(email,password);
            navigate('/')
        }catch(error){
            console.log(error.message)
        }
    }

    return (
        <>
            <Helmet>
                <title>Netflix-Clone | Sign Up</title>
                <meta name="description" content="Netflix-Clone"/>
            </Helmet>

            <div className='w-full h-screen'>
                <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/7ca5b7c7-20aa-42a8-a278-f801b0d65fa1/cf9bfd9b-2b70-416d-8538-5f15a5167ccf/EG-en-20240326-popsignuptwoweeks-perspective_alpha_website_small.jpg" alt="netflix-logo" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div className='fixed w-full px-4 py-24'>
                    <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
                        <div className='max-w-[320px] mx-auto py-16'>
                            <h1 className='text-3xl font-bold'> Sign Up</h1>
                            <form onSubmit={handleSubmit} className="w-full flex flex-col py-4">
                                <input onChange={(e)=>setEmail(e.target.value)} className='p-3 my-2 bg-gray-700 rounded' type="email" placeholder='Email' autoComplete='email' />
                                <input onChange={(e)=>setPassword(e.target.value)} className='p-3 my-2 bg-gray-700 rounded'type="password" placeholder='Password' autoComplete='crrent-password' />
                                <button type='submit' className='bg-red-600 py-3 my-6 rounded font-bold'>Sign Up</button>
                                <div className='flex justify-between items-center text-sm text-gray-500'>
                                    <p><input className='mr-2' id='me' type="checkbox" /><label htmlFor="me">Remember me</label></p>
                                    <p>Need Help?</p>
                                </div>
                                <p className='py-6'><span className='text-gray-400'>Already subscribed to Netflix?</span>
                                <Link to='/login'>Sign In</Link>
                                </p>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Signup