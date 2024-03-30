import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Movie from './Movie'
import {MdChevronRight,MdChevronLeft} from 'react-icons/md'


const Row = ({title,fetchURL,rowID}) => {

    const [movies,setMovies] = useState([])

    useEffect(()=>{
        axios.get(fetchURL).then((res)=>{
            setMovies(res.data.results)
        })
    },[fetchURL])

    const slideLeft = ()=>{
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = ()=>{
        let slider = document.getElementById('slider' + rowID)
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>{title}</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                onClick={slideLeft}
                className='bg-white left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden ' size={40}/>
                <div id={'slider' + rowID} className='relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((item,id)=>{
                        return(
                            <Movie item={item} key={id}/>
                        )
                    })}
                </div>
                <MdChevronRight
                onClick={slideRight}
                className='bg-white right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden' size={40}/>
            </div>
        </>
    )
}

export default Row