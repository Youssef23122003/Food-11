import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './index.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import About from './Components/About/About'
import Service from './Components/Service/Service'
import Booking from './Components/Booking/Booking'
import Notfound from './Components/Notfound/Notfound'
import Menu from './Components/Menu/Menu'
import Home from './Components/Home/Home'
import OurTeam from './Components/OurTeam/OurTeam'
import Testimonial from './Components/Testimonial/Testimonial'
import Contact from './Components/Contact/Contact'
import Layout from './Components/Layout/Layout'

function App() {
  
 let routes= createBrowserRouter([
  {path:'' , element:<Layout/> , children:[
    {index:true , element:<Home/>},
    {path:'about', element:<About/>},
    {path:'contact', element:<Contact/>},
    {path:'testimonial', element:<Testimonial/>},
    {path:'booking', element:<Booking/>},
    {path:'ourteam', element:<OurTeam/>},
    {path:'service', element:<Service/>},
    {path:'menu', element:<Menu/>},
    {path:'*' , element:<Notfound/>},
  ]}])

  return (
    <>
        <RouterProvider router={routes}></RouterProvider>
    </>
  )
}

export default App
