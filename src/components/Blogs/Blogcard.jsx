import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

const Blogcard = ({img,title,description}) => {
  return (
    <>
    <div className='group ' >
        <div className='overflow-hidden pl-16 pr-14'>
            <img src={img} alt="" 
            className='  mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300 '/>
        </div>
        <div className='space-y-2 p-2 ml-24 mr-14 -translate-y-16 bg-white bg-'>
            <h1 className='text-xl font-semibold  line-clamp-1'>{title}</h1>
            <h1 className=' line-clamp-2  font-semibold'>{description}</h1>
            <div className='flex justify-end pr-4 text-gray-500 '>
                <FaArrowRight className='text-primary/50 group-hover:text-primary group-hover:translate-x-2 duration-300' />
             </div>     

        </div>

    </div>
    </>
  )
}

export default Blogcard

