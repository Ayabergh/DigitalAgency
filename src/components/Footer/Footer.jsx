import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Footer = () => {
    const footerlink=[
        {
            title:"About",
            link:"/#about",
        },
        {
            title:"Features",
            link:"/#features",
        },
        {
            title:"Works",
            link:"/#Works",
        },
        {
            title:"Career",
            link:"/#career",
        },
    ];
    const helplink=[
        {
            title:"Customer Support",
            link:"/#support",
        },
        {
            title:"Delivery Details",
            link:"/#Delivery-Details",
        },
        {
            title:"Terms and Conditions",
            link:"/#terms-conditions",
        },
        {
            title:"Privacy Policy",
            link:"/#privacy-policy",
        },
    ];

    const resourceslink=[
        {
            title:"Free E-books",
            link:"/#ebooks",
        },
        {
            title:"How to Blog",
            link:"/#how-to-blog",
        },
        {
            title:"Subscribe TCJ",
            link:"/#Subscribe-TCJ",
        },
    ];

  return (
    <>
    <div>
        <div className="bg-gray-400 text-white">

            <div className='container '>
            <div className="grid  md:grid-cols-3 py-5">
                
                    
                    <div className='py-8 px-4'>
                        <h1 className='sm:text-3xl text-xl font-bold sm:text-left text-justify mb-3 flex items-center gap-3 '>Digital Agency </h1>
                        <p className='text-sm'>
                        A digital agency builds brands by creating unique, user-centric websites that provide exceptional experiences across all devices.A digital agency builds brands by creating unique, user-centric websites .
                        </p>
                        <br />
                        <div className='flex gap-4 items-center mt-6'>
                            <a href="#">
                                <FaFacebook className='text-2xl hover:text-primary duration-300'/>
                            </a>
                            <a href="#">
                                <FaInstagram className='text-2xl hover:text-primary duration-300'/>
                            </a>
                            <a href="#">
                                <FaLinkedin className='text-2xl hover:text-primary duration-300'/>
                            </a>

                        </div>
                    </div>
                    <div className='grid grid-cols-2 sm:grid-cols-3 col-span-2 md:pl-10'>
                        <div className=''>
                            <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold mb-3 '>Company </h1>
                                <ul className='space-y-3'>
                                    {footerlink.map((link)=>(
                                        <li 
                                        key={link.title}
                                        className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-white'>
                                            <span>
                                                {link.title}
                                            </span>
                                        </li>
                                ))}
                                </ul>
                                

                            </div>
                        </div>

                        {/*--------------*/}
                        <div>
                        <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold mb-3 '>Help </h1>
                                <ul className='space-y-3'>
                                    {helplink.map((link)=>(
                                        <li 
                                        key={link.title}
                                        className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-white'>
                                            <span>
                                                {link.title}
                                            </span>
                                        </li>
                                ))}
                                </ul>
                                

                            </div>
                        </div>
                        {/*--------------*/}
                        <div>
                        <div className='py-8 px-4'>
                                <h1 className='text-xl font-bold mb-3 '>Resources </h1>
                                <ul className='space-y-3'>
                                    {resourceslink.map((link)=>(
                                        <li 
                                        key={link.title}
                                        className='cursor-pointer hover:translate-x-1 duration-300 hover:!text-primary space-x-1 text-white'>
                                            <span>
                                                {link.title}
                                            </span>
                                        </li>
                                ))}
                                </ul>
                                

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      
      
   
        </div>
    </>
  )
}

export default Footer
