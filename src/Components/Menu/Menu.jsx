import React, { useEffect, useState } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { AnimatePresence, motion } from 'framer-motion';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee, faHamburger, faUtensils } from "@fortawesome/free-solid-svg-icons";
import food1 from "../../assets/menu-1.jpg";
import food2 from "../../assets/menu-2.jpg";
import food3 from "../../assets/menu-3.jpg";
import food4 from "../../assets/menu-4.jpg";
import food5 from "../../assets/menu-5.jpg";
import food6 from "../../assets/menu-6.jpg";
import food7 from "../../assets/menu-7.jpg";
import food8 from "../../assets/menu-8.jpg";
import { Helmet } from 'react-helmet';




const Menu = () => {
   const [activeTab, setActiveTab] = useState("breakfast");
    const tabs = [
      { id: "breakfast", label: "Popular Breakfast",  icon: <FontAwesomeIcon className="text-2xl" icon={faCoffee}/>},
      { id: "lunch", label: "Special Launch", icon: <FontAwesomeIcon className="text-2xl" icon={faHamburger} />  },
      { id: "dinner", label: "Lovely Dinner", icon: <FontAwesomeIcon className="text-2xl" icon={faUtensils} />},
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
                <title>Food Menu</title>
            </Helmet>
        </div>
       <header className='flex flex-col items-center justify-center'>
       <h1 data-aos="fade-down" className='text-6xl font-bold text-white'>Food Menu</h1>
       <p className='text-white mt-4'><span className='text-yellow-500'>Home / </span><span className='text-yellow-500'>Pages / </span>Menu</p>
    </header>
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
    </>
  )
}

export default Menu
