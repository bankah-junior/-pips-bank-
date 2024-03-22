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
        <div className="flex flex-col items-center topnav md:flex-row md:px-2" id="navbar">
            <div className="w-full active md:w-100-70 md:ml-6">
                <Link to='/' className='w-100-50'>
                    <img src={logo} alt="logo" className="md:w-full" />
                </Link>
            </div>
            <div className="hidden text-4xl font-semibold menu_container_big md:w-100-30 md:block">
                <ul className="flex flex-col justify-around md:flex-row">
                    <Link className="flex flex-col" to={"/chart"}>
                        <li className="mb-1">Chart</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link to={"/tutorials"} className="flex flex-col">
                        <li className="mb-1">Tutorials</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link to={"/resources"} className="flex flex-col">
                        <li className="mb-1">Resources</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link className="flex flex-col" to={'/econs-calendar'}>
                        <li className="mb-1">Economic Calendar</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link className="flex flex-col" to={"/events"}>
                        <li className="mb-1">Events</li>
                        <div className="bg-red-500"></div>
                    </Link>
                    <Link className="option-link">
                        <li className="mb-1">FAQS</li>
                        <div className="bg-red-500"></div>
                    </Link>
                </ul>
            </div>
            <div className="w-full toggler md:hidden">
                { toggleMenu ? <RiCloseLine color='white' size={27} onClick={() => setToggleMenu(false)} className='icon' /> : <RiMenu3Line color='white' size={27} onClick={() => setToggleMenu(true)} className='icon' /> }
                { toggleMenu && (
                    <div className="w-full px-4 text-right rounded-t-lg myLinks" id="myLinks" style={{backgroundColor: "#333"}}>
                        <Link className='flex flex-row items-center justify-end mobile-nav-menu'>
                            <li className='pt-4 pb-2 mr-4 scale-in-hor-right'>Mentorship</li>
                            <GiTeacher size={24} color='white' />
                        </Link><hr />
                        <Link to={"/tutorials"} className='flex flex-row items-center justify-end mobile-nav-menu'>
                            <li className='pb-2 mr-4 scale-in-hor-right'>Tutorials</li>
                            <BsPersonVideo size={24} color='white' />
                        </Link><hr />
                        <Link to={"/resources"} className='flex flex-row items-center justify-end mobile-nav-menu'>
                            <li className='pb-2 mr-4 scale-in-hor-right'>Resources</li>
                            <SiMaterialdesignicons size={24} color='white' />
                        </Link><hr />
                        <Link className='flex flex-row items-center justify-end mobile-nav-menu'>
                            <li className='pb-2 mr-4 scale-in-hor-right'>Blogs</li>
                            <FaBlog size={24} color='white' />
                        </Link><hr />
                        <Link className='flex flex-row items-center justify-end mobile-nav-menu'>
                            <li className='pb-2 mr-4 scale-in-hor-right'>Events</li>
                            <MdEventSeat size={24} color='white' />
                        </Link><hr />
                        <Link className='flex flex-row items-center justify-end mobile-nav-menu'>
                            <li className='mr-4 scale-in-hor-right'>FAQS</li>
                            <RiQuestionnaireFill size={24} color='white' />
                        </Link>
                    </div>
                ) }
            </div>
        </div>
        {/* <a href="#navbar" className='hidden mr-4 to-top' id='toTop'>
            <button>Up</button>
        </a> */}
    </div>

  )
}

export default Navbar