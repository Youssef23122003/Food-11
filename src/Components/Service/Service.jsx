import React, { useEffect, useRef } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';
import img22 from '../../assets/bg-hero.jpg'

const Service = () => {
   useEffect(() => {
          Aos.init({ duration: 1000, once: true }); 
        }, []);
  return (
    <>
    <div className="application">
            <Helmet>  
                <title>Services</title>
            </Helmet>
        </div>
       <header style={{
               backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)), url(${img22})`,
             }} className='flex h-[55vh] bg-cover bg-center flex-col items-center justify-center'>
       <h1 data-aos="fade-down" className='text-6xl font-bold text-white'>Services</h1>
       <p className='text-white mt-4'><span className='text-yellow-500'>Home / </span><span className='text-yellow-500'>Pages / </span>Service</p>
    </header>
      <section className='py-15 bg-gray-100'>
      <div className='w-[90%] m-auto'>
        <div className="flex justify-center gap-3 items-center">
             <div className="w-[40px] h-[4px] bg-yellow-500"></div>
             <h5 className="text-yellow-400 text-2xl font-bold">Our Services</h5>
            <div className="w-[40px] h-[4px] bg-yellow-500"></div>
         </div>
         <h1 className="text-4xl font-extrabold text-center mt-3">Explore Our Services</h1>
        <div className="flex sm:justify-center lg:justify-normal flex-wrap">
          <div className="lg:w-1/4 px-3">
              <div data-aos="fade-up" className="p-6 py-10 bg-white transition-all duration-300 hover:bg-orange-400 group">
                <i className="fa fa-user-tie fa-3x text-orange-400 transition-all duration-300 group-hover:text-white mb-4"></i>
                <h5 className="text-2xl font-bold transition-all duration-300 group-hover:text-white">Master Chefs</h5>
                <p className="transition-all duration-300 group-hover:text-white">
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                </p>
              </div>
          </div>
          <div className="lg:w-1/4  px-3">
              <div data-aos="fade-up" data-aos-delay="200" className='p-6 py-10 bg-white transition-all duration-300 hover:bg-orange-400 group'>
              <i class="fa text-orange-400 fa-3x fa-utensils transition-all duration-300 group-hover:text-white mb-4"></i>
                <h5 className='text-2xl font-bold transition-all duration-300 group-hover:text-white'>Quality Food</h5>
                <p className="transition-all duration-300 group-hover:text-white">
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                </p>
              </div>
          </div>
          <div className="lg:w-1/4 px-3">
              <div data-aos="fade-up" data-aos-delay="300" className='p-6 py-10 bg-white transition-all duration-300 hover:bg-orange-400 group'>
              <i class="fa fa-3x fa-cart-plus transition-all duration-300 group-hover:text-white mb-4 text-orange-400"></i>
                <h5 className='text-2xl font-bold transition-all duration-300 group-hover:text-white'>Online Order</h5>
                <p className="transition-all duration-300 group-hover:text-white">
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                </p>
              </div>
          </div>
          <div className="lg:w-1/4 px-3">
              <div data-aos="fade-up" data-aos-delay="400" className='p-6 py-10 bg-white transition-all duration-300 hover:bg-orange-400 group'>
              <i class="fa fa-3x fa-headset transition-all duration-300 group-hover:text-white mb-4 text-orange-400"></i>
                <h5 className='text-2xl font-bold transition-all duration-300 group-hover:text-white'>24/7 Service</h5>
                <p className="transition-all duration-300 group-hover:text-white">
                  Diam elitr kasd sed at elitr sed ipsum justo dolor sed clita amet diam
                </p>
              </div>
          </div>
        </div>
      </div>
    </section>

    </>
  )
}

export default Service
