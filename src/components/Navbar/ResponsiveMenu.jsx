import React from 'react'
import {FaUserCircle} from 'react-icons/fa'
import {MenuLinks} from './Navbar'
const ResponsiveMenu = ({showMenu}) => {
  return (
    <div className={`${showMenu?"left-0":"left-[-100%]"} 
    fixed bottom-0 top-0 w-[55%] transition-all duration-200 
    shadow-sm pt-16 px-8 bg-white dark:bg-white-100 z-50 flex flex-col justify-between pb-4 `}>
      <div className='card '>
        {/*user Menu*/}
        <div className='flex items-center justify-star gap-3'>
            <FaUserCircle size={50}/>
            <div>
                <h1 className='font-semibold'>User Name</h1>
                <h1 className='text-sm text-slate-500'>Premium user</h1>
            </div>

        </div>
        {/*Menu section */}
        <nav className='mt-12'>
            <ul className='space-y-4 font-semibold '>
                {
                    MenuLinks.map(({id,name,link}) => {
                        return(
                            <li key={id} className='cursor-pointer '>
                                <a href="#" className='  hover:text-primary
                                 py-2 transition-all duration-100  inline-block'>
                                    {""}
                                    {name}</a>
                            </li>
                        )
                    })
                }
            </ul>
        </nav>
      </div>
       {/* footer section */}
          <div>
            <h1 >
                Made by Aya Bergheul
            </h1>
          </div>
    </div>
  )
}

export default ResponsiveMenu
