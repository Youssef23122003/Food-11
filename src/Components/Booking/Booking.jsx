import React, { useEffect } from 'react'
import Aos from "aos";
import "aos/dist/aos.css";
import { Helmet } from 'react-helmet';
import img22 from '../../assets/bg-hero.jpg'
export default function Booking() {
  useEffect(() => {
              Aos.init({ duration: 1000, once: true }); 
            }, []);
  return (
    <>
    <div className="application">
            <Helmet>  
                <title>Booking</title>
            </Helmet>
        </div>
    <header style={{
                   backgroundImage: `linear-gradient(rgba(15, 23, 43, 0.9), rgba(15, 23, 43, 0.9)), url(${img22})`,
                 }} className='flex h-[55vh] bg-cover bg-center flex-col items-center justify-center'>
       <h1 data-aos="fade-down" className='text-6xl font-bold text-white'>Booking</h1>
       <p className='text-white mt-4'><span className='text-yellow-500'>Home / </span><span className='text-yellow-500'>Pages / </span>Booking</p>
    </header>
    <section className="py-10 bg-gray-100">
      <div className="w-[90%] mx-auto text-center">
        <h5 className="text-orange-500 text-xl font-semibold">Contact Us</h5>
        <h1 className="text-4xl font-bold text-gray-900 mt-2">Contact For Any Query</h1>

        <div className="flex flex-wrap justify-center gap-10 mt-8">
          <div className="text-center">
            <h3 className="text-lg font-semibold text-orange-500">Booking</h3>
            <p className="text-gray-700 flex items-center justify-center gap-2">
              📧 book@example.com
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-orange-500">General</h3>
            <p className="text-gray-700 flex items-center justify-center gap-2">
              📧 info@example.com
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-lg font-semibold text-orange-500">Technical</h3>
            <p className="text-gray-700 flex items-center justify-center gap-2">
              📧 tech@example.com
            </p>
          </div>
        </div>

        <div className="flex flex-wrap mt-10">
          <div className="w-full lg:w-1/2 px-4">
            <iframe
              className="w-full h-full rounded-lg"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609927427!2d-74.25987368747346!3d40.69714942260192!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York!5e0!3m2!1sen!2sus!4v1614051858556!5m2!1sen!2sus"
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
          <div className="w-full lg:w-1/2 px-4 mt-6 lg:mt-0">
            <form className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex flex-wrap -mx-2 mb-4">
                <div className="w-1/2 px-2">
                  <input
                    type="text"
                    placeholder="Your Name"
                    className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
                <div className="w-1/2 px-2">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
                  />
                </div>
              </div>
              <input
                type="text"
                placeholder="Subject"
                className="w-full p-3 border rounded-lg mb-4 focus:ring-orange-500 focus:border-orange-500"
              />
              <textarea
                rows="4"
                placeholder="Message"
                className="w-full p-3 border rounded-lg focus:ring-orange-500 focus:border-orange-500"
              ></textarea>
              <button className="w-full bg-orange-500 text-white py-3 mt-4 rounded-lg font-bold hover:bg-orange-600">
                SEND MESSAGE
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}
