import React from 'react'
import { FaCameraRetro } from 'react-icons/fa'
import{GiNotebook} from 'react-icons/gi'
import{SlNote} from 'react-icons/sl'

{/**Json file(data)*/}
const skillsData = [
    {
        name:"App Dev",
        icon: <FaCameraRetro className='text-4xl text-primary'/>,
        link:'#',
        description:
        'A digital agency builds brands by creating unique, user-centric websites that provide exceptional experiences across all devices.',
        aosDelay:'0',
    },
    {
        name:"web dev",
        icon: <GiNotebook className='text-4xl text-primary'/>,
        link:'#',
        description:
        'A digital agency builds brands by creating unique, user-centric websites that provide exceptional experiences across all devices.',
        aosDelay:'0'
    } ,
    {
        name:"Graphic design",
        icon: <SlNote className='text-4xl text-primary'/>,
        link:'#',
        description:
        'A digital agency builds brands by creating unique, user-centric websites that provide exceptional experiences across all devices.',
        aosDelay:'0'
    },
    {
        name:"Digital Marketing",
        icon: <SlNote className='text-4xl text-primary'/>,
        link:'#',
        description:
        'A digital agency builds brands by creating unique, user-centric websites that provide exceptional experiences across all devices.',
        aosDelay:'0'
    }
]
const Services = () => {
  return (
   
        <>
       <div className='bg-gray-100 py-12 sm:grid sm:place-items-center  mt-16'>
        <div className="container">
            <div className='pb-12 text-center space-y-3'>
                <h1 className='text-3xl font-semibold text-sky-700'>Explore Our Sirveces</h1>
                <p>
                    A digital agency builds brands by creating unique, user-centric websites that provide exceptional experiences across all devices.
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5'>
                {skillsData.map((skill) =>(
                        <div key={skill.name} className='card space-y-3 sm:grid-cols-4'>
                            <div>{skill.icon}</div>
                            <h1 className='text-lg font-semibold'>{skill.name}</h1>
                            <p className='text-gray-600 '>{skill.description}</p>
                        </div>

                    ))}
            </div>
            <div className='pt-4 text-center sm:mt-8'>
            <button className='btn-primary '>Learn More </button>
            </div>
        </div>
       </div>
    </>
   
  )
}

export default Services
