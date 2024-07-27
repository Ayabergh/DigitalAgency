import React from 'react'
import brand from '../../assets/websites/b1.png'
import brand1 from '../../assets/websites/b2.png'
import brand2 from '../../assets/websites/b3.png'
import brand4 from '../../assets/websites/b6.png'

const BrandLogos = () => {
  return (
    <>
    <div className='container my-12'>
        <h1 className='text-center text-lg font-semibold'>Powering next-generation companies</h1>
    </div>
    <div className='flex flex-wrap items-center  justify-evenly gap-3 py-5 md:px-32'>
    <img src={brand} alt="" className=' w-[140px]  h-[75px] ' />
    <img src={brand1} alt="" className='w-[140px] h-[75px] ' />
    <img src={brand2} alt="" className='w-[140px] h-[75px] ' />
    <img src={brand4} alt="" className='w-[120px] h-[75px] ' />
   

    </div>
    </>
  )
}

export default BrandLogos
