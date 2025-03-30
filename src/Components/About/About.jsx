import React, { useEffect, useRef, useState } from 'react'
import img2 from "../../assets/about-1.jpg";
import img3 from "../../assets/about-2.jpg";
import img4 from "../../assets/about-3.jpg";
import img5 from "../../assets/about-4.jpg";
import Aos from "aos";
import "aos/dist/aos.css";


const Counter = ({ target }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);
  

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 1.0 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (visible) {
      let start = 0;
      const step = target / 50;
      const interval = setInterval(() => {
        start += step;
        if (start >= target) {
          setCount(target);
          clearInterval(interval);
        } else {
          setCount(Math.floor(start));
        }
      }, 30);

      return () => clearInterval(interval);
    }
  }, [visible, target]);

  return (
    <h1 ref={ref} className="text-yellow-400 font-bold text-5xl">
      {count}
    </h1>
  );
};

const About = () => {
  useEffect(() => {
        Aos.init({ duration: 1000, once: true }); 
      }, []);
  return (
    <>
    <header className='flex flex-col items-center justify-center'>
       <h1 data-aos="fade-down" className='text-6xl font-bold text-white'>About Us</h1>
       <p className='text-white mt-4'><span className='text-yellow-500'>Home / </span><span className='text-yellow-500'>Pages / </span>About</p>
    </header>
     <section className="py-10">
             <div className="w-[90%] m-auto">
               <div className="flex flex-wrap items-center">
                 <div className="lg:w-1/2 px-5">
                   <div className="flex flex-wrap space-y-2">
                     <div className="w-1/2 flex px-2">
                       <img  data-aos="zoom-in" src={img2} className="w-full" alt="" />
                     </div>
                     <div className="w-1/2 flex self-end">
                       <img  data-aos="zoom-in" src={img3} className="w-[75%]" alt="" />
                     </div>
                     <div className="w-1/2 flex justify-end self-start px-2">
                       <img  data-aos="zoom-in" src={img4} className="w-[75%]" alt="" />
                     </div>
                     <div className="w-1/2 flex">
                       <img  data-aos="zoom-in" src={img5} className="" alt="" />
                     </div>
                   </div>
                 </div>
                 <div className="lg:w-1/2 px-5">
                   <div>
                     <div className="flex items-center gap-3">
                       <h5 className="text-2xl font-bold text-yellow-400">About Us</h5>
                       <div className="w-[40px] h-[4px] bg-yellow-500"></div>
                     </div>
                     <h1 className="mt-1 text-5xl font-bold">
                       Welcome to <i className="fa fa-utensils text-amber-500 me-2"></i>Restoran
                     </h1>
                     <p className="mt-4">
                     Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                     </p>
                     <p className="mt-4">
                     Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos erat ipsum et lorem et sit, sed stet lorem sit.
                     </p>
                     <div className="flex mt-3">
                       <div className="w-1/2">
                         <div className="border-l-6 border-l-amber-400 p-2 flex items-center gap-4">
                           <Counter target={15} />
                           <div>
                             <h5>Years of</h5>
                             <span className="font-bold uppercase">Experience</span>
                           </div>
                         </div>
                       </div>
                       <div className="w-1/2">
                         <div className="border-l-6 border-l-amber-400 p-2 flex items-center gap-4">
                           <Counter target={50} />
                           <div>
                             <h5>Popular</h5>
                             <span className="font-bold uppercase">Master Chefs</span>
                           </div>
                         </div>
                       </div>
                     </div>
                     <button className="bg-orange-400 rounded-sm mt-5 cursor-pointer py-4 px-10 font-bold text-white uppercase">
                       Read More
                     </button>
                   </div>
                 </div>
               </div>
             </div>
           </section>
    </>
  )
}

export default About
