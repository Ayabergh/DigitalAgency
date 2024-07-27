import React,{useState,useEffect} from 'react'
import {BiSolidSun, BiSolidMoon} from 'react-icons/bi'

const Darkmode = () => {
    const [theme, setTheme] = useState(
        localStorage.getItem("theme") ? localStorage.getItem("theme") : null
    )

    const element=document.documentElement
    useEffect(() => {
        localStorage.setItem("theme", theme);
        if (theme === "dark") {
            element.classList.add("dark");
        } else {
            element.classList.remove("dark");
            element.classList.remove("light");
        }
    });

  return (
    <>{ theme==="dark" ?<BiSolidSun onClick={() => setTheme("light")} 
    className='text-2xl'/>:
    <BiSolidMoon onClick={() => setTheme("dark")} className='text-2xl'/>}</>
  )
}

export default Darkmode
