import React from 'react'
import Slider from 'react-slick'
import pic from '../../assets/websites/woman.jpg'

const views=[
    {
        id:1,
        name:"Samantha bgh",
        text:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad. Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad. ",
        img:pic,
    },
    {
        id:2,
        name:"Aya bergheul",
        text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad. ",
        img:pic,
    },
    {
        id:3,
        name:"Aya bergheul",
        text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad. ",
        img:pic,
    },
    {
        id:4,
        name:"Aya bergheul",
        text:" Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, ad. ",
        img:pic,
    }

]
const Views = () => {
    const settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 600,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: false,
        autoplaySpeed: 3000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
      };
  return (
    <>
    <div className='py-10'>
        <div className='container '>
            <div className='grid grid-cols-1 max-w-screen-xl mx-auto gap-6'>
            <Slider {...settings}>
                    {
                    views.map(({id,name,text,img})=>(
                        <div key={id} className='my-'>
                            <div className='flex flex-col sm:flex-row gap-5 p-4 mx-4 rounded-xl relative'>
                                <img src={img} 
                                alt=""
                                className="block mx-auto h-[300px] w-full sm:w-[200px] object-cover" />
                            <div className='space-y-4'>
                            <p className='text-gray-500 text-black/80 xl:pl-40'>{text}</p>    
                            <h1 className='text-xl font-bold'>{name}</h1>
                            
                            </div>
                            <p className='text-black/10 text-[10rem] font-serif absolute bottom-0 right-0
                            '>,,</p>
                            </div>
                        </div>
                    ))
                    }
                </Slider>
                
            </div>
        </div>
    </div>
    </>
  )
}

export default Views
