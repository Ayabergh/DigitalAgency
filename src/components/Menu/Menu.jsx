import React from 'react'
import HeroImg from '../../assets/websites/team.jpg'
const Menu = () => {
  return (
    <>
      <main className='bg-white '>
        <div className='container min-h-[620px] flex mt-10 sm:mt-0'>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 place-items-center">
                {/* img content */}
                <div className='order-1 sm:order-2 relative'>
                    <img src={HeroImg} alt="" className='rounded-3xl'/>
                    <div className='bg-white px-4 py-2 shadow-md rounded-xl
                     absolute -bottom-5 -right-8 '>
                        <p>⭐ Projects </p>
                        <h1 className='font-bold'>600+ <span className='font-normal'>Done</span></h1>
                    </div>
                </div>
                {/* content text */}
                <div className='space-y-5 order-2 sm:order-1
                xl:pr-40'>
                    <h1 className='text-4xl sm:text-5xl font-semibold mb-3'>Building Brands in the <span className='text-primary'>Digital Agency </span></h1>
                    <p className='mb-3'>
                    A digital agency builds brands by creating unique, user-centric 
                    websites that provide exceptional experiences across all devices.
                     They enhance visibility with SEO, develop engaging content </p>
                     <button className=' btn-primary'> Get Started </button>
                </div>

            </div>
        </div>
      </main>
    </>
  )
}

export default Menu
