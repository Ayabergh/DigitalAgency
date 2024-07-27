import React from 'react'
import pic from '../../assets/websites/f1.jpg'
import pic1 from '../../assets/websites/team1.jpg'
import pic2 from '../../assets/websites/f4.jpg'

import Blogcard from './Blogcard'

const blogdata=[
    {
        id:1,
        name:"Learn digital marketing",
        title:"digital marketing with us in 2024",
        description:"A digital agency builds brands by creating unique, user-centric websites that provide exceptional experiences across all devices. They enhance visibility with SEO, develop engaging content, and continuously monitor performance for optimization. This approach builds trust and credibility, driving organic traffic and user engagement.",
        img:pic,
        author:"aya bergheul",
        date:"2022-01-01",
    },
    {
        id:2,
        name:"Learn digital marketing",
        title:"digital marketing with us in 2024",
        description:"A digital agency builds brands by creating unique, user-centric websites that provide exceptional experiences across all devices. They enhance visibility with SEO, develop engaging content, and continuously monitor performance for optimization. This approach builds trust and credibility, driving organic traffic and user engagement. ",
        img:pic1,
        author:"aya bergheul",
        date:"2022-01-01",
    },
    {
        id:3,
        name:"Learn digital marketing",
        title:"digital marketing with us in 2024",
        description:"A digital agency builds brands by creating unique, user-centric websites that provide exceptional experiences across all devices. They enhance visibility with SEO, develop engaging content, and continuously monitor performance for optimization. This approach builds trust and credibility, driving organic traffic and user engagement. ",
        img:pic2,
        author:"aya bergheul",
        date:"2022-01-01",
    },
]
const Blogs = () => {
  return (
    <>
     <div className='bg-gray-100 py-5 pb-14'>
        <div className='container'>
            <h1 className='my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold '>Our Blogs</h1>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
            blogdata.map((blog)=>(
                <Blogcard key={blog.id} {...blog}/>
        ))}
        </div>
        <div className='text-center'>
            <button className='btn-primary font-semibold  '>View All Posts </button>
        </div>
        
     </div>
    </>
  )
}

export default Blogs
