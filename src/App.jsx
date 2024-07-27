import React from 'react'
import Navbar from './components/Navbar/Navbar'
import Menu from './components/Menu/Menu'
import BrandLogos from './components/BrandLogos/BrandLogos'
import Services from './components/Services/Services'
import Views from './components/Views/Views'

import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import Blogs from './components/Blogs/Blogs'
import Footer from './components/Footer/Footer'
import aos from 'aos';
import "aos/dist/aos.css";

const App = () => {
  React.useEffect(()=>{
    aos.init({
      duration: 800,
      easing:'ease-in-out',
      offset:100,
      delay:100,
    }); 
    aos.refresh();
    // Initialize aos.ini
  },[])
  return ( 
    <div className='overflow-x-hidden'>
      <Navbar/> 
      <Menu/>
      <BrandLogos/>
      <Services/>
      <Views/>
      <Blogs/>
      <Footer/>
      </div>
  )
}

export default App
