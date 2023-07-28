import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/general/logo1.gif';
import { RiMenu3Line, RiCloseLine, RiQuestionnaireFill } from 'react-icons/ri';
import { GiTeacher } from 'react-icons/gi';
import { BsPersonVideo } from 'react-icons/bs';
import { MdEventSeat } from 'react-icons/md';
import { SiMaterialdesignicons } from 'react-icons/si';
import { FaBlog } from 'react-icons/fa';
import { useState } from 'react';
import './navStyle.css';


const Navbar = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    // useEffect(() => {
    //     window.onscroll = function() {myFunction2()};

    //     var navbar = document.getElementById("navbar");
    //     // var toTop = document.getElementById("toTop");
    //     var sticky = navbar.offsetTop;
        
    //     function myFunction2() {
    //       if (window.pageYOffset >= sticky) {
    //         navbar.classList.add("sticky");
    //         navbar.classList.add("shadow-xl");         
    //         // toTop.classList.remove("hidden");
    //       } else {
    //         navbar.classList.remove("sticky");
    //         navbar.classList.remove("shadow-xl");            
    //         // toTop.classList.add("hidden");
    //       }
    //     }
    // }, [])

  return (

    <div className='relative'>
        <div className="topnav flex flex-col md:flex-row items-center md:px-2" id="navbar">
            <div className="active w-full md:w-100-70 md:ml-6">
                <Link to='/' className='w-100-50'>
                    <img src={logo} alt="logo" className="md:w-full" />
                </Link>
            </div>
            <div className="menu_container_big md:w-100-30 hidden md:block text-4xl font-semibold">
                <ul className="flex flex-col md:flex-row justify-around">
                    <Link className="flex flex-col">
                        <li className="mb-1">Mentorship</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link className="flex flex-col">
                        <li className="mb-1">Tutorials</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link className="flex flex-col">
                        <li className="mb-1">Resources</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link className="flex flex-col">
                        <li className="mb-1">Blogs</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link className="flex flex-col">
                        <li className="mb-1">Events</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link className="option-link">
                        <li className="mb-1">FAQS</li>
                        <div className="bg-red-500"></div>
                    </Link>
                </ul>
            </div>
            <div className="toggler w-full md:hidden">
                { toggleMenu ? <RiCloseLine color='white' size={27} onClick={() => setToggleMenu(false)} className='icon' /> : <RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true)} className='icon' /> }
                { toggleMenu && (
                    <div className="myLinks w-full text-right px-4 rounded-t-lg" id="myLinks" style={{backgroundColor: "#333"}}>
                        <Link className='mobile-nav-menu flex flex-row items-center justify-end'>
                            <li className='pb-2 pt-4 scale-in-hor-right mr-4'>Mentorship</li>
                            <GiTeacher size={24} color='white' />
                        </Link><hr />
                        <Link className='mobile-nav-menu flex flex-row items-center justify-end'>
                            <li className='pb-2 scale-in-hor-right mr-4'>Tutorials</li>
                            <BsPersonVideo size={24} color='white' />
                        </Link><hr />
                        <Link className='mobile-nav-menu flex flex-row items-center justify-end'>
                            <li className='pb-2 scale-in-hor-right mr-4'>Resources</li>
                            <SiMaterialdesignicons size={24} color='white' />
                        </Link><hr />
                        <Link className='mobile-nav-menu flex flex-row items-center justify-end'>
                            <li className='pb-2 scale-in-hor-right mr-4'>Blogs</li>
                            <FaBlog size={24} color='white' />
                        </Link><hr />
                        <Link className='mobile-nav-menu flex flex-row items-center justify-end'>
                            <li className='pb-2 scale-in-hor-right mr-4'>Events</li>
                            <MdEventSeat size={24} color='white' />
                        </Link><hr />
                        <Link className='mobile-nav-menu flex flex-row items-center justify-end'>
                            <li className='scale-in-hor-right mr-4'>FAQS</li>
                            <RiQuestionnaireFill size={24} color='white' />
                        </Link>
                    </div>
                ) }
            </div>
        </div>
        {/* <a href="#navbar" className='to-top hidden mr-4' id='toTop'>
            <button>Up</button>
        </a> */}
    </div>

  )
}

export default Navbar