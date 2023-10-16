import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/images/logo.png';
import { RiLinkedinFill } from 'react-icons/ri';
import { AiFillYoutube, AiFillGithub, AiOutlineInstagram, AiFillLinkedin } from 'react-icons/ai'; // Correct the import here



const socialLinks =[
  {
    path:"https://studio.youtube.com/channel/UCURgtLHLgI57mmTZx4-7-Yg/videos",
    icon: <AiFillYoutube className="group-hover:text-white w-4 h-5" />,
  },
  {
    path:"https://github.com/DeshanBandara",
    icon: <AiFillGithub className="group-hover:text-white w-4 h-5" />,
  },
  {
    path:"https://www.instagram.com",
    icon: <AiOutlineInstagram className="group-hover:text-white w-4 h-5" />,
  },
  {
    path:"https://www.linkedin.com/in/deshanbandarab68185204/",
    icon: <RiLinkedinFill className="group-hover:text-white w-4 h-5" />,
  },
  ]

  const quickLinks01 = [
    {
      path: "/home",
      display: "Home",
    },
    {
      path: "/",
      display: "About Us",
    },
    {
      path: "/",
      display: "Services",
    },
    {
      path: "/",
      display: "Blog",
    },
  ]

const quickLinks02 = [
  {
    path: "/find-a-doctor",
    display: "Find a Doctor",
  },
  {
    path: "/",
    display: "Request an Appoinment",
  },
  {
    path: "/",
    display: "Fund a Location",
  },
  {
    path: "/",
    display: "Get an Opinion",
  },
]

const quickLinks03 = [
  {
    path: "/",
    display: "Donate",
  },
  {
    path: "/",
    display: "Contact us",
  },
]

const Footer = () => {
  const year = new Date().getFullYear(); // You'll need to define the 'year' variable.

  return (
    <footer className='pb-16 pt-10'>
      <div className='container'>
        <div className="flex justify-between flex-col md:flex-row flex-wrap gap-[30px]">
          <div>
            <img src={logo} alt="" />
            <p className='text-[16px] leading-7 font-400 text-textColor mt-4'>
              Copyright &copy; {year} developed by Deshan Bandara all rights reserved.</p>
              <div className="flex items-center gap-3 mt-4">
                {socialLinks.map((link,index) => (
                  <Link to={link.path} key={index} className='w-9 h-9 border-solid border-[#181A1E] rounded-full flex
                  items-center justify-center group hover:bg-[#343f76] hover:border-none'>
                    {link.icon}
                  </Link>
                ))}
              </div>
          </div>

            <div>
              <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-black'>Quick Links</h2>
              {quickLinks01.map((item, index)=> (
                <li key={index} className='mb-4'>
                  <Link to={item.path} className='text-[16px] leading-7 font[400] text-textColor'>
                    {item.display}
                    </Link>
                </li>
              ))}
            </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-black'>I want to:</h2>
            {quickLinks02.map((item, index) => (
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font[400] text-textColor'>
                  {item.display}
                </Link>
              </li>
            ))}
          </div>
          <div>
            <h2 className='text-[20px] leading-[30px] font-[700] mb-6 text-black'>Support</h2>
            {quickLinks03.map((item, index) => (
              <li key={index} className='mb-4'>
                <Link to={item.path} className='text-[16px] leading-7 font[400] text-textColor'>
                  {item.display}
                </Link>
              </li>
            ))}
          </div>
            

        </div>
      </div>
    </footer>
  );
}

export default Footer