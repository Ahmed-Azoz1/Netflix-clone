import React,{useState,useEffect} from 'react'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'
import {AiOutlineClose} from 'react-icons/ai'
import { UserAuth } from '../../context/AuthContext'
import { db } from '../../firebase'
import {updateDoc,doc,onSnapshot} from 'firebase/firestore'

const SavedShows = () => {

    const [movies,setMovies] = useState([]);
    const {user} = UserAuth();

    const slideLeft = ()=>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft - 500;
    }

    const slideRight = ()=>{
        let slider = document.getElementById('slider')
        slider.scrollLeft = slider.scrollLeft + 500;
    }

    const movieRef = doc(db,'users',`${user?.email}`)
    const deleteShow = async(passedId)=>{
        try {
            const result = movies.filter((item)=>item.id !== passedId)
            await updateDoc(movieRef,{
                savedShows:result,
            });
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(()=>{
        onSnapshot(doc(db,'users',`${user?.email}`),(doc)=>{
            setMovies(doc.data()?.savedShows)
        })
    },[user?.email])

    return (
        <>
            <h2 className='text-white font-bold md:text-xl p-4'>My Shows</h2>
            <div className='relative flex items-center group'>
                <MdChevronLeft
                onClick={slideLeft}
                className='bg-white text-black left-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden ' size={40}/>
                
                <div id={'slider'} className='relative w-full h-full overflow-x-scroll whitespace-nowrap scroll-smooth scrollbar-hide'>
                    {movies.map((item,id)=>{
                        return(
                            <div key={id} className='relative p-2 cursor-pointer inline-block lg:w-[280px] md:w-[240px] sm:w-[200px] w-[160px]'>
                                <img className='w-full h-auto block' src={`https://image.tmdb.org/t/p/w500/${item?.img}`} alt={item.title} />
                                <div className='absolute top-0 left-0 w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white'>
                                    <p className='whitespace-normal text-xs md:text-sm font-bold flex justify-center items-center h-full text-center'>
                                        {item?.title}
                                    </p>
                                    <p><AiOutlineClose onClick={()=>deleteShow(item.id)} className='absolute top-4 right-4 text-gray-300' /></p>
                                </div>
                            </div>
                        )
                    })}
                </div>
                
                <MdChevronRight
                onClick={slideRight}
                className='bg-white text-black right-0 rounded-full absolute opacity-50 hover:opacity-100 cursor-pointer z-10 group-hover:block hidden' size={40}/>
            </div>
        </>
    )
}

export default SavedShows