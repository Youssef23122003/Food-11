import React from "react";


export default function Footer() {
  return (
    <footer className="bg-[#0a1128] text-white py-10 px-6 md:px-20">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
      
        <div>
          <h5 className="text-lg font-semibold text-orange-400 mb-3">Company</h5>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-orange-400">About Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Contact Us</a></li>
            <li><a href="#" className="hover:text-orange-400">Reservation</a></li>
            <li><a href="#" className="hover:text-orange-400">Privacy Policy</a></li>
            <li><a href="#" className="hover:text-orange-400">Terms & Conditions</a></li>
          </ul>
        </div>

        {/* Contact Section */}
        <div>
          <h5 className="text-lg font-semibold text-orange-400 mb-3">Contact</h5>
          <p className="flex items-center gap-2"><span>📍</span> 123 Street, New York, USA</p>
          <p className="flex items-center gap-2"><span>📞</span> +012 345 67890</p>
          <p className="flex items-center gap-2"><span>📧</span> info@example.com</p>
          <div className="flex gap-3 mt-3">
            <a href="#" className="p-2 bg-gray-700 transition-all  hover:bg-orange-400 rounded-full"><i className="fa-brands text-white text-2xl fa-facebook"></i></a>
            <a href="#" className="p-2 bg-gray-700 transition-all hover:bg-orange-400 rounded-full"><i className="fa-brands text-white text-2xl fa-instagram"></i></a>
            <a href="#" className="p-2 bg-gray-700 transition-all hover:bg-orange-400 rounded-full"><i className="fa-brands text-white text-2xl fa-whatsapp"></i></a>
            <a href="#" className="p-2 bg-gray-700 transition-all hover:bg-orange-400 rounded-full"><i className="fa-brands text-white text-2xl fa-youtube"></i></a>
          </div>
        </div>

        {/* Opening Hours */}
        <div>
          <h5 className="text-lg font-semibold text-orange-400 mb-3">Opening</h5>
          <p>Monday - Saturday</p>
          <p className="text-gray-400">09AM - 09PM</p>
          <p className="mt-2">Sunday</p>
          <p className="text-gray-400">10AM - 08PM</p>
        </div>

        {/* Newsletter */}
        <div>
          
          <h5 className="text-lg font-semibold text-orange-400 mb-3">Newsletter</h5>
          <p className="text-gray-400">Subscribe to our newsletter for updates.</p>
          <div className="mt-3 flex">
            <input
              type="email"
              placeholder="Your email"
              className="p-2 flex-1 rounded-l bg-gray-800 text-white focus:outline-none"
            />
            <button className="bg-orange-400 px-4 py-2 rounded-r text-white hover:bg-orange-500">
              SIGNUP
            </button>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400 text-xs">
        © Your Site Name, All Rights Reserved. Designed by <a href="#" className="text-orange-400">HTML Codex</a>  
        <br />Distributed By <a href="#" className="text-orange-400">ThemeWagon</a>
      </div>
    </footer>
  );
}

// import React from 'react'

// const Footer = () => {
//   return (
//     <div>
//       <h1>Footer</h1>
//     </div>
//   )
// }

// export default Footer
