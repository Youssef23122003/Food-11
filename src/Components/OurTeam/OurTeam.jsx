import React, { useEffect } from 'react'
import chef1 from "../../assets/team-1.jpg"
import chef2 from "../../assets/team-2.jpg"
import chef3 from "../../assets/team-3.jpg"
import chef4 from "../../assets/team-4.jpg"
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet'


const OurTeam = () => {
   useEffect(() => {
            Aos.init({ duration: 1000, once: true }); 
          }, []);
  return (
    <>
    <div className="application">
            <Helmet>  
                <title>Our Team</title>
            </Helmet>
        </div>
    <header className='flex flex-col items-center justify-center'>
       <h1 data-aos="fade-down" className='text-6xl font-bold text-white'>Our Team</h1>
       <p className='text-white mt-4'><span className='text-yellow-500'>Home / </span><span className='text-yellow-500'>Pages / </span>Team</p>
    </header>
       <section className="py-10 bg-gray-200 ">
              <div className="w-[90%] m-auto">
                <div className="flex justify-center gap-3 items-center">
                   <div className="w-[40px] h-[4px] bg-yellow-500"></div>
                   <h5 className="text-yellow-400 text-2xl font-bold">Team Members</h5>
                  <div className="w-[40px] h-[4px] bg-yellow-500"></div>
               </div>
               <h1 className="text-4xl font-extrabold text-center mt-3">Our Master Chefs</h1>
                 <div className="flex flex-wrap gap-y-3 mt-5">
                 <div className="lg:w-1/4 px-3">
        <div className="bg-white shadow-lg relative group overflow-hidden">
          <div className="flex flex-col items-center p-6 justify-center">
           
            <div className="overflow-hidden w-full h-full rounded-full">
              <img
                src={chef1}
                className=" object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Chef"
              />
            </div>
      
           
            <h3 className="text-xl mt-2 font-bold">Full Name</h3>
            <span className="text-sm">Designation</span>
          </div>
      
          {/* أيقونات التواصل الاجتماعي */}
          <div className="overflow-hidden max-h-0 transition-all duration-1000 group-hover:max-h-24 group-hover:opacity-100 mt-2 flex justify-center gap-2">
            <div className="bg-yellow-300 p-2 rounded-t-xl">
              <i className="fa-brands text-white text-2xl fa-facebook"></i>
            </div>
            <div className="bg-yellow-300 p-2 rounded-t-xl">
              <i className="fa-brands text-white text-2xl fa-twitter"></i>
            </div>
            <div className="bg-yellow-300 p-2 rounded-t-xl">
              <i className="fa-brands text-2xl text-white fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      
      <div className="lg:w-1/4 px-3">
        <div className="bg-white shadow-lg relative group overflow-hidden">
          <div className="flex flex-col items-center p-6 justify-center">
            {/* الصورة مع التأثير عند الـ hover */}
            <div className="w-full h-full overflow-hidden rounded-full">
              <img
                src={chef2}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Chef"
              />
            </div>
      
            {/* بيانات الشيف */}
            <h3 className="text-xl mt-2 font-bold">Full Name</h3>
            <span className="text-sm">Designation</span>
          </div>
      
          {/* أيقونات التواصل الاجتماعي */}
          <div className="overflow-hidden max-h-0 transition-all duration-1000 group-hover:max-h-24 group-hover:opacity-100 mt-2 flex justify-center gap-2">
            <div className="bg-yellow-300 p-2 rounded-t-xl">
              <i className="fa-brands text-white text-2xl fa-facebook"></i>
            </div>
            <div className="bg-yellow-300 p-2 rounded-t-xl">
              <i className="fa-brands text-white text-2xl fa-twitter"></i>
            </div>
            <div className="bg-yellow-300 p-2 rounded-t-xl">
              <i className="fa-brands text-2xl text-white fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      
      
      <div className="lg:w-1/4 px-3">
        <div className="bg-white shadow-lg relative group overflow-hidden">
          <div className="flex flex-col items-center p-6 justify-center">
            {/* الصورة مع التأثير عند الـ hover */}
            <div className="w-full h-full overflow-hidden rounded-full">
              <img
                src={chef3}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Chef"
              />
            </div>
      
            {/* بيانات الشيف */}
            <h3 className="text-xl mt-2 font-bold">Full Name</h3>
            <span className="text-sm">Designation</span>
          </div>
      
          {/* أيقونات التواصل الاجتماعي */}
          <div className="overflow-hidden max-h-0 transition-all duration-1000 group-hover:max-h-24 group-hover:opacity-100 mt-2 flex justify-center gap-2">
            <div className="bg-yellow-300 p-2 rounded-t-xl">
              <i className="fa-brands text-white text-2xl fa-facebook"></i>
            </div>
            <div className="bg-yellow-300 p-2 rounded-t-xl">
              <i className="fa-brands text-white text-2xl fa-twitter"></i>
            </div>
            <div className="bg-yellow-300 p-2 rounded-t-xl">
              <i className="fa-brands text-2xl text-white fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="lg:w-1/4 px-3">
        <div className="bg-white shadow-lg relative group overflow-hidden">
          <div className="flex flex-col items-center p-6 justify-center">
            {/* الصورة مع التأثير عند الـ hover */}
            <div className="w-full h-full overflow-hidden rounded-full">
              <img
                src={chef4}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                alt="Chef"
              />
            </div>
      
            {/* بيانات الشيف */}
            <h3 className="text-xl mt-2 font-bold">Full Name</h3>
            <span className="text-sm">Designation</span>
          </div>
      
          {/* أيقونات التواصل الاجتماعي */}
          <div className="overflow-hidden max-h-0 transition-all duration-1000 group-hover:max-h-24 group-hover:opacity-100 mt-2 flex justify-center gap-2">
            <div className="bg-yellow-300 p-2 rounded-t-xl">
              <i className="fa-brands text-white text-2xl fa-facebook"></i>
            </div>
            <div className="bg-yellow-300 p-2 rounded-t-xl">
              <i className="fa-brands text-white text-2xl fa-twitter"></i>
            </div>
            <div className="bg-yellow-300 p-2 rounded-t-xl">
              <i className="fa-brands text-2xl text-white fa-instagram"></i>
            </div>
          </div>
        </div>
      </div>
                 </div>
              </div>
              
            </section>
      
    </>
  )
}

export default OurTeam
