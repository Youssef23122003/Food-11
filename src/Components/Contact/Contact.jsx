import React, { useEffect } from 'react'
import { Helmet } from 'react-helmet';
import img1 from '../../assets/video.jpg'
import './Contact.module.css'
import Aos from "aos";
import "aos/dist/aos.css";
import img22 from '../../assets/bg-hero.jpg'

const Contact = () => {
   useEffect(() => {
                Aos.init({ duration: 1000, once: true }); 
              }, []);
  return (
    <>
    <div className="application">
            <Helmet>  
                <title>Contact</title>
            </Helmet>
    </div>
    <header style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)), url(${img22})`,
      }} className='flex h-[55vh] bg-cover bg-center flex-col items-center justify-center'>
       <h1 data-aos="fade-down" className='text-6xl font-bold text-white'>Contact Us</h1>
       <p className='text-white mt-4'><span className='text-yellow-500'>Home / </span><span className='text-yellow-500'>Pages / </span>Contact</p>
    </header>
     <section className="py-20">
               <div className="w-[90%] mx-auto">
                  <div className="flex flex-wrap">
                    <div className="w-full lg:w-1/2">
                     <div className="h-[250px] md:h-[350px] lg:h-[500px] w-full flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${img1})`,}}>
                     <button className="relative w-16 h-16 md:w-20 md:h-20 flex items-center justify-center rounded-full border-2 border-white text-white bg-yellow-500 transition-transform duration-300 hover:scale-110">
                        <span className="absolute w-full h-full bg-yellow-500 rounded-full animate-ping"></span>
                        <span className="relative z-10 text-2xl md:text-3xl">▶</span>
                      </button>
                     </div>
                    </div>
                    <div className="w-full lg:w-1/2">
                       <div className="h-full bg-black p-4 md:p-6">
                         <div className="flex gap-2 items-center">
                           <h5 className="text-yellow-500 text-xl md:text-2xl">Reservation</h5>
                           <div className="w-[30px] h-[3px] bg-yellow-500"></div>
                         </div>
                         <h1 className="text-white mt-2 text-3xl md:text-4xl font-bold mb-4">Book A Table Online</h1>
                           <form data-aos="fade-up" className="w-full" action="">
                             <div className="flex flex-wrap">
                                <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-2">
                                  <input type="text" className="bg-gray-50 border-0 text-gray-900 text-sm focus:ring-0 block w-full p-4" placeholder="Your Name" required />
                                </div>
                                <div className="w-full md:w-1/2 pl-0 md:pl-2 mb-2">
                                  <input type="email" className="bg-gray-50 border-0 text-gray-900 text-sm focus:ring-0 block w-full p-4" placeholder="Your Email" required />
                                </div>
                                <div className="w-full md:w-1/2 pr-0 md:pr-2 mb-2">
                                  <input type="tel" className="bg-gray-50 border-0 text-gray-900 text-sm focus:ring-0 block w-full p-4" placeholder="Your Phone" required />
                                </div>
                                <div className="w-full md:w-1/2 pl-0 md:pl-2 mb-2">
                                   <select className="bg-gray-50 border-0 text-gray-900 text-sm focus:ring-0 block w-full p-4">
                                    <option value="">Select Time</option>
                                    <option>Breakfast</option>
                                    <option>Lunch</option>
                                    <option>Dinner</option>
                                   </select>
                                </div>
                                <div className="w-full mb-2">
                                  <textarea rows="4" className="bg-gray-50 border-0 text-gray-900 text-sm focus:ring-0 block w-full p-4" placeholder="Special Request"></textarea>
                                </div>
                             </div>
                             <div>
                               <button className="bg-yellow-500 hover:bg-yellow-600 transition-colors duration-300 py-4 uppercase font-bold text-white w-full">Book Now</button>
                             </div>
                           </form>
                       </div>
                    </div>
                  </div>
               </div>
           </section>
    </>  )
}

export default Contact
