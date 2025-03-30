import React, { useEffect, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';
import img22 from "../../assets/bg-hero.jpg"

const Testimonial = () => {
   useEffect(() => {
              Aos.init({ duration: 1000, once: true }); 
            }, []);
   const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
      name: "Client Name",
      profession: "Profession",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      id: 2,
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
      name: "Client Name",
      profession: "Profession",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      bgColor: "bg-orange-400",
      textColor: "text-white",
    },
    {
      id: 3,
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
      name: "Client Name",
      profession: "Profession",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      id: 4,
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
      name: "Client Name",
      profession: "Profession",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      bgColor: "bg-white",
      textColor: "text-black",
    },
    {
      id: 5,
      text: "Dolor et eos labore, stet justo sed est sed. Diam sed sed dolor stet amet eirmod eos labore diam.",
      name: "Client Name",
      profession: "Profession",
      image: "https://randomuser.me/api/portraits/men/3.jpg",
      bgColor: "bg-white",
      textColor: "text-black",
    },
  ];

  return (
    <>
    <div className="application">
            <Helmet>  
                <title>Testimonial</title>
            </Helmet>
        </div>
    <header style={{
        backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)), url(${img22})`,
      }} className='flexh-[55vh] bg-cover bg-center flex-col items-center justify-center'>
       <h1 data-aos="fade-down" className='text-6xl font-bold text-white'>Testimonials</h1>
       <p className='text-white mt-4'><span className='text-yellow-500'>Home / </span><span className='text-yellow-500'>Pages / </span>Testimonial</p>
    </header>
     <section className="text-center py-15">
          <h2 className="text-yellow-500 text-xl font-semibold">
            --- Testimonial ---
          </h2>
          <h3 className="text-3xl font-bold text-gray-900 mt-2">
            Our Clients Say
          </h3>
    
          <div className="mt-10 w-[90%] m-auto">
            <Swiper
              slidesPerView={1} // لضبط العرض بحيث يكون المنتصف أوضح
              centeredSlides={true} // يجعل السلايد النشط دائمًا في المنتصف
              centeredSlidesBounds={true} // يحل مشكلة العنصر الأول
              loop={true} // يسمح بالتنقل بشكل دائري بدون فراغات
              spaceBetween={90}
              speed={1200} 
              breakpoints={{
                768: { slidesPerView: 1},
                1024: { slidesPerView: 2.5 },
              }}
              pagination={{ clickable: true }}
              effect="coverflow"
              coverflowEffect={{
                rotate: 0,
                stretch: 34,
                depth: 100,
                modifier: 1,
                slideShadows: false,
              }}
              modules={[Pagination, EffectCoverflow]}
              className="w-full"
              onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
            >
              {testimonials.map((item, index) => (
                <SwiperSlide key={item.id} className="flex justify-center">
                  <div
                    className={`p-6 w-[90%] max-w-md rounded-lg shadow-lg transition-transform duration-300 hover:scale-105 ${
                      index === activeIndex
                        ? "bg-orange-400 text-white scale-110"
                        : "bg-white text-black scale-95 opacity-80"
                    }`}
                  >
                    <div className="flex items-start gap-2">
                      <span className="text-4xl text-orange-500 font-bold">“</span>
                      <p className="text-sm">{item.text}</p>
                    </div>
                    <div className="flex items-center gap-3 mt-4">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-12 h-12 rounded-full border-2 border-gray-300"
                      />
                      <div>
                        <h4 className="font-bold">{item.name}</h4>
                        <span className="text-sm">{item.profession}</span>
                      </div>
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </section>
    
    </>
    
  )
}

export default Testimonial
