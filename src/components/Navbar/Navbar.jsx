import React from 'react'
import Logo from '../../assets/websites/Logo2.png'
import {HiMenuAlt1,HiMenuAlt3}from 'react-icons/hi'
import ResponsiveMenu from './ResponsiveMenu'
export const MenuLinks = [
  {id:1,
   name:"About",
   link:"/#about",
   },
  { id:2,
    name:"Services",
    link:"/#services", },
  { id:1,
    name:"Projects",
    link:"/#projects",},
]
const Navbar = () => {
  const [showMenu,setShowMenu] = React.useState(false)
  const toogleMenu = () =>{
    setShowMenu(!showMenu);
  }
  return (
    < > 
      <nav >
        <div className="container py-3 md:py-2 ">
          <div className="flex justify-between items-center">
            {/*logo Section*/}
            <div >
              <a href="#" className='flex items-center '> 
              <img src={Logo} alt="logo" className="w-20  "/> 
              <span className='text-xl sm:text-2xl font-semibold text-center'>Digital Agency</span>
              </a>
             </div>
            {/* NavLinks Section */}
            <div className='hidden md:block'>
              <ul className='flex items-center gap-5'>
                {MenuLinks.map(({id,name,link}) =>{
                    return(
                       <li key={id} className='cursor-pointer py-4'>
                        <a href="#" className='text-lg font-medium hover:text-primary
                         py-2  hover:border-b-2 hover:border-primary 
                        transition-all duration-100'>{name}</a>
                      </li>);})}
                      <button className="btn-primary" > Get in Touch </button>
                </ul>
            </div>
            {/**mobile view */}
           
            <div className='flex items-center gap-4 md:hidden'>
              {showMenu ? (
               <HiMenuAlt1 onClick={toogleMenu}
               className='cursor-pointer text-2xl'/>
              ):(
                <HiMenuAlt3 onClick={toogleMenu}
               className='cursor-pointer text-2xl'/>
              )}
            </div>
          </div>
          </div>
          {/**mobile navlinks */}
          <ResponsiveMenu showMenu={showMenu} />
      </nav>
    </>
  )
}

export default Navbar
