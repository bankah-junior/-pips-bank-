import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/general/logo1.gif';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import { useState, useEffect } from 'react';
import './navStyle.css';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    useEffect(() => {
        window.onscroll = function() {myFunction2()};

        var navbar = document.getElementById("navbar");
        var sticky = navbar.offsetTop;
        
        function myFunction2() {
          if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky");
            navbar.classList.add("shadow-xl");
          } else {
            navbar.classList.remove("sticky");
            navbar.classList.remove("shadow-xl");
          }
        }
    }, [])

  return (

    <>
        <div className="topnav flex flex-col md:flex-row items-center md:px-2" id="navbar">
            <div className="active w-full md:w-100-70 md:ml-6">
                <Link to='/home' className='w-100-50'>
                    <img src={logo} alt="logo" className="md:w-full" />
                </Link>
            </div>
            <div className="menu_container_big md:w-100-30 hidden md:block text-4xl font-semibold">
                <ul className="flex flex-col md:flex-row justify-around">
                    <Link to='/mentorship' className="flex flex-col">
                        <li className="mb-1">Mentorship</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link to='/tutorials' className="flex flex-col">
                        <li className="mb-1">Tutorials</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link to='/resources' className="flex flex-col">
                        <li className="mb-1">Resources</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link to='/blogs' className="flex flex-col">
                        <li className="mb-1">Blogs</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link to='/events' className="flex flex-col">
                        <li className="mb-1">Events</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link to='/faqs' className="option-link">
                        <li className="mb-1">FAQS</li>
                        <div className="bg-red-500"></div>
                    </Link>
                </ul>
            </div>
            <div className="toggler w-full md:hidden">
                { toggleMenu ? <RiCloseLine color='white' size={27} onClick={() => setToggleMenu(false)} className='icon' /> : <RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true)} className='icon' /> }
                { toggleMenu && (
                    <div className="myLinks w-full text-right px-4 scale-in-hor-right rounded-t-lg" id="myLinks" style={{backgroundColor: "#333"}}>
                        <Link to='/mentorship'>
                            <li className='pb-2 pt-4 border-b-2'>Mentorship</li>
                        </Link>
                        <Link to='/tutorials'>
                            <li className='pb-2 border-b-2'>Tutorials</li>
                        </Link>
                        <Link to='/resources'>
                            <li className='pb-2 border-b-2'>Resources</li>
                        </Link>
                        <Link to='/blogs'>
                            <li className='pb-2 border-b-2'>Blogs</li>
                        </Link>
                        <Link to='/events'>
                            <li className='pb-2 border-b-2'>Events</li>
                        </Link>
                        <Link to='/faqs'>
                            <li>FAQS</li>
                        </Link>
                    </div>
                ) }
            </div>
        </div>
    </>

  )
}

export default Navbar