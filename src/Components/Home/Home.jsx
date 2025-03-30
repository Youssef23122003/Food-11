import React, { useEffect, useState, useRef } from "react";
import "./Home.module.css";
import { NavLink } from "react-router-dom";
import { motion,AnimatePresence } from "framer-motion";
import img22 from "../../assets/bg-hero.jpg"
import img1 from "../../assets/hero.png";
import img2 from "../../assets/about-1.jpg";
import img3 from "../../assets/about-2.jpg";
import img4 from "../../assets/about-3.jpg";
import img5 from "../../assets/about-4.jpg";
import food1 from "../../assets/menu-1.jpg";
import food2 from "../../assets/menu-2.jpg";
import food3 from "../../assets/menu-3.jpg";
import food4 from "../../assets/menu-4.jpg";
import food5 from "../../assets/menu-5.jpg";
import food6 from "../../assets/menu-6.jpg";
import food7 from "../../assets/menu-7.jpg";
import food8 from "../../assets/menu-8.jpg";
import log from "../../assets/video.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHamburger, faUtensils } from "@fortawesome/free-solid-svg-icons";
import Aos from "aos";
import "aos/dist/aos.css";
import chef1 from "../../assets/team-1.jpg"
import chef2 from "../../assets/team-2.jpg"
import chef3 from "../../assets/team-3.jpg"
import chef4 from "../../assets/team-4.jpg"
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Helmet } from "react-helmet";


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

const Home = () => {
  
  const [activeTab, setActiveTab] = useState("breakfast");
  const tabs = [
    { id: "breakfast", label: "Popular Breakfast",  icon: <FontAwesomeIcon className="text-2xl" icon={faCoffee}/>},
    { id: "lunch", label: "Special Launch", icon: <FontAwesomeIcon className="text-2xl" icon={faHamburger} />  },
    { id: "dinner", label: "Lovely Dinner", icon: <FontAwesomeIcon className="text-2xl" icon={faUtensils} />},
  ];

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
  
  const products = {
    breakfast: [
      { name: "Chicken Burger", image: food1, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"},
      { name: "Chicken Burger", image: food2, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food3, price: "$115" ,desc:"Ipsum ipsum clita erat amet dolor justo diam" },
      { name: "Chicken Burger", image: food4, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food5, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food6, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food7, price: "$115" ,desc:"Ipsum ipsum clita erat amet dolor justo diam" },
      { name: "Chicken Burger", image: food8, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  }
    ],
    lunch: [
      { name: "Pancakes", image: food1, price: "$115" ,desc:"Ipsum ipsum clita erat amet dolor justo diam"},
      { name: "Chicken Burger", image: food2, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food3, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food4, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food5, price: "$115" ,desc:"Ipsum ipsum clita erat amet dolor justo diam" },
      { name: "Chicken Burger", image: food6, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food7, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food8, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
    ],
    dinner: [
      { name: "Chicken Burger", image: food1, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food2, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food3, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food4, price: "$115" ,desc:"Ipsum ipsum clita erat amet dolor justo diam" },
      { name: "Chicken Burger", image: food5, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food6, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food7, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
      { name: "Chicken Burger", image: food8, price: "$115",desc:"Ipsum ipsum clita erat amet dolor justo diam"  },
    ],
  };

  useEffect(() => {
      Aos.init({ duration: 1000, once: true }); 
    }, []);

  return (
    <>
    <div className="application">
            <Helmet>  
                <title>Home</title>
            </Helmet>
        </div>
  <header style={{ height: "100vh" , backgroundImage: `url(${img22})` }} id="home-page" className='flex overflow-hidden h-screen items-center mt-10 sm:mt-12 md:mt-16'>
    <div className='w-[95%] sm:w-[90%] mx-auto'>
      <div className="flex flex-col-reverse lg:flex-row items-center">
        <div className='w-full lg:w-1/2 mt-8 lg:mt-0 text-center lg:text-left px-4 sm:px-0'>
          <motion.div
            initial={{ x: "-100vw", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold text-white">
              Enjoy Our <br /> Delicious Meal
            </h1>
            <p className="text-white/90 text-sm sm:text-base md:text-lg mt-3 sm:mt-4 md:mt-5">
              Tempor erat elitr rebum at clita. Diam dolor diam ipsum sit. Aliqu diam amet diam et eos. 
              Clita erat ipsum et lorem et sit, sed stet lorem sit clita duo justo magna dolore erat amet
            </p>
            <NavLink 
              to="/booking" 
              className="inline-block mt-4 sm:mt-6 md:mt-8 text-sm sm:text-base bg-yellow-500 text-white px-4 sm:px-6 md:px-8 py-3 sm:py-4 rounded-md font-semibold hover:bg-yellow-600 transition-all duration-300"
            >
              BOOK A TABLE
            </NavLink>
          </motion.div>
        </div>
        <div className='w-[85%] sm:w-[75%] md:w-[70%] lg:w-1/2 mx-auto lg:mx-0 mb-6 lg:mb-0'>
          <div className='overflow-hidden'>
            <motion.img
              src={img1}
              alt="Grilled Dish"
              className="w-full h-auto"
              animate={{ rotate: 360 }}
              transition={{ repeat: Infinity, duration: 30, ease: "linear" }}
            />
          </div>
        </div>
      </div>
    </div>
  </header>


      <section className='py-10 bg-gray-100'>
      <div className='w-[90%] m-auto'>
      <div className="flex justify-center gap-3 items-center">
             <div className="w-[40px] h-[4px] bg-yellow-500"></div>
             <h5 className="text-yellow-400 text-2xl font-bold">Our Services</h5>
            <div className="w-[40px] h-[4px] bg-yellow-500"></div>
         </div>
         <h1 className="text-4xl font-extrabold text-center mt-3">Explore Our Services</h1>
        <div className="flex mt-3 sm:justify-center lg:justify-normal flex-wrap">
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

      <section className="py-10">
        <div className="w-[90%] m-auto">
          <div className="flex flex-wrap items-center">
            <div className="lg:w-1/2 px-5">
              <div className="flex flex-wrap space-y-2">
                <div className="w-1/2 flex px-2">
                  <img  data-aos="zoom-in" src={img2} className="w-full" alt="" />
                </div>
                <div className="w-1/2 flex self-end">
                  <img  data-aos="zoom-in" data-aos-delay="200" src={img3} className="w-[75%]" alt="" />
                </div>
                <div className="w-1/2 flex justify-end self-start px-2">
                  <img  data-aos="zoom-in" data-aos-delay="300" src={img4} className="w-[75%]" alt="" />
                </div>
                <div className="w-1/2 flex">
                  <img  data-aos="zoom-in" data-aos-delay="400" src={img5} className="" alt="" />
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
     

<section data-aos="fade-up" className="py-4">
  <div className="w-[90%] mx-auto">
  <div className="flex justify-center gap-3 items-center">
     <div className="w-[40px] h-[4px] bg-yellow-500"></div>
     <h5 className="text-yellow-400 text-2xl font-bold">Food Menu</h5>
     <div className="w-[40px] h-[4px] bg-yellow-500"></div>
  </div>
  <h1 className="text-4xl font-bold text-center mt-3">Most Popular Items</h1>
  <div className="flex justify-center gap-6 pb-3 relative mt-3">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative flex items-center gap-2 px-4 py-2 text-lg font-semibold transition ${
              activeTab === tab.id ? "text-black" : "text-yellow-400"
            }`}
          >
            {tab.icon} {tab.label}
            {activeTab === tab.id && (
              <motion.div
                layoutId="underline"
                className="absolute bottom-0 left-0 w-full h-1 bg-orange-600"
                transition={{ type: "spring", stiffness: 500, damping: 30 }}
              />
            )}
          </button>
        ))}
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6"
        >
          {products[activeTab].map((item, index) => (
            <div  key={index} className="flex items-center justify-between p-4 ">
            <div className="flex items-center gap-4">
              <img src={item.image} alt={item.name} className="w-14 h-14 object-cover rounded-md" />
              <div>
                <h3 className="text-lg font-semibold">{item.name}</h3>
                <p className="text-gray-600 italic">{item.desc}</p>
              </div>
            </div>
            <span className="text-orange-600 font-bold text-lg">{item.price}</span>
          </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
      </section>
     <section className="py-10">
                    <div className="w-[90%] m-auto">
                       <div className="flex flex-wrap">
                         <div className="w-full lg:w-1/2">
                          <div className="h-[250px] md:h-[350px] lg:h-[500px] w-full flex justify-center items-center bg-cover bg-center bg-no-repeat" style={{backgroundImage: `url(${log})`,}}>
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
                
      <section className="py-10 bg-gray-200 ">
        <div className="w-[90%] m-auto">
          <div className="flex justify-center gap-3 items-center">
             <div className="w-[40px] h-[4px] bg-yellow-500"></div>
             <h5 className="text-yellow-400 text-2xl font-bold">Team Members</h5>
            <div className="w-[40px] h-[4px] bg-yellow-500"></div>
         </div>
         <h1 className="text-4xl font-extrabold text-center mt-3">Our Master Chefs</h1>
           <div className="flex flex-wrap gap-y-3 mt-5">
           <div data-aos="fade-up"  className="lg:w-1/4  px-3">
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

<div data-aos="fade-up" data-aos-delay="200" className="lg:w-1/4 px-3">
  <div className="bg-white shadow-lg relative group overflow-hidden">
    <div className="flex flex-col items-center p-6 justify-center">
    
      <div className="w-full h-full overflow-hidden rounded-full">
        <img
          src={chef2}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt="Chef"
        />
      </div>

      
      <h3 className="text-xl mt-2 font-bold">Full Name</h3>
      <span className="text-sm">Designation</span>
    </div>

   
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


<div data-aos="fade-up" data-aos-delay="300" className="lg:w-1/4 px-3">
  <div className="bg-white shadow-lg relative group overflow-hidden">
    <div className="flex flex-col items-center p-6 justify-center">
      
      <div className="w-full h-full overflow-hidden rounded-full">
        <img
          src={chef3}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt="Chef"
        />
      </div>

      
      <h3 className="text-xl mt-2 font-bold">Full Name</h3>
      <span className="text-sm">Designation</span>
    </div>

   
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
<div data-aos="fade-up" data-aos-delay="400" className="lg:w-1/4 px-3">
  <div className="bg-white shadow-lg relative group overflow-hidden">
    <div className="flex flex-col items-center p-6 justify-center">
     
      <div className="w-full h-full overflow-hidden rounded-full">
        <img
          src={chef4}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          alt="Chef"
        />
      </div>

      <h3 className="text-xl mt-2 font-bold">Full Name</h3>
      <span className="text-sm">Designation</span>
    </div>

    
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


      <section className="py-10 text-center">
      <h2 className="text-yellow-500 text-xl font-semibold">
        --- Testimonial ---
      </h2>
      <h3 className="text-3xl font-bold text-gray-900 mt-2">
        Our Clients Say
      </h3>

      <div className="mt-10 w-[90%] m-auto">
        <Swiper
          slidesPerView={1} 
          centeredSlides={true} 
          centeredSlidesBounds={true}
          loop={true} 
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
                  <span className="text-4xl text-orange-500 font-bold">"</span>
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
  );
};

export default Home;













