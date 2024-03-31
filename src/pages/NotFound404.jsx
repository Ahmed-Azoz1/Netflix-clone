import React from 'react'
import { Helmet } from "react-helmet-async"
import { Link } from 'react-router-dom'

const NotFound404 = () => {
  return (
    <>
            <Helmet>
                <title>Netflix-Clone | Not Found404</title>
                <meta name="description" content="Netflix-Clone"/>
            </Helmet>

            <div className='w-full h-screen'>
                <img className='object-cover top-0 left-0 w-full h-screen' src="https://assets.nflxext.com/ffe/siteui/pages/errors/bg-lost-in-space.png" alt="notfound404" />
                <div className='bg-black/60 fixed top-0 left-0 w-full h-screen'></div>
                <div>
                    <div className='text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
                        <h1 className='text-6xl mb-6'>Lost your way?</h1>
                        <p className='text-3xl'>Sorry, we can't find that page. You'll find lots to explore on the home page. </p>
                        <div className='flex justify-center items-center mt-4'>
                          <Link to='/'>
                            <button className="bg-gray-100 px-8 py-3 rounded hover:bg-gray-300 cursor-pointer font-bold text-2xl text-black">Home Netflix</button>
                          </Link>
                        </div>
                        <div className='flex justify-center items-center mt-8'>
                          <p className='font-bold text-3xl'>Not Found <span className='text-red-600'>404</span></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
}

export default NotFound404