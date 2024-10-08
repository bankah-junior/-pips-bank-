import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/general/logo1.gif";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { useAuthContext } from "../../hooks/useAuthContext";
import { useState } from "react";
import "./navStyle.css";
// import { AiFillProfile } from "react-icons/ai";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const { user } = useAuthContext();

  return (
    <div className="relative">
      <div
        // className="flex flex-col items-center topnav md:flex-row md:px-2"
        className={`flex items-center topnav ${user && "sm:flex-row flex-col"} md:px-2`}
        id="navbar"
      >
        <div className="w-full active md:w-[30%] md:ml-6">
          <Link to="/home" className="sm:w-1/2">
            <img src={logo} alt="logo" className="md:w-full" />
          </Link>
        </div>
        {user && (
          <>
            <div className="hidden text-4xl font-semibold menu_container_big md:w-[70%] md:block">
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
                <Link className="flex flex-col" to={"/econs-calendar"}>
                  <li className="mb-1">Economic Calendar</li>
                  <div className="bg-red-500"></div>
                </Link>
                <Link className="flex flex-col" to={"/events"}>
                  <li className="mb-1">Events</li>
                  <div className="bg-red-500"></div>
                </Link>
                <Link className="option-link" to={"/faqs"}>
                  <li className="mb-1">FAQS</li>
                  <div className="bg-red-500"></div>
                </Link>
              </ul>
            </div>
            <div className="w-full toggler md:hidden">
              {toggleMenu ? (
                <RiCloseLine
                  color="white"
                  size={27}
                  onClick={() => setToggleMenu(false)}
                  className="icon"
                />
              ) : (
                <RiMenu3Line
                  color="white"
                  size={27}
                  onClick={() => setToggleMenu(true)}
                  className="icon"
                />
              )}
              {toggleMenu && (
                <div
                  className="w-full px-4 text-right rounded-t-lg myLinks"
                  id="myLinks"
                  style={{ backgroundColor: "#333" }}
                >
                  <Link
                    className="flex flex-row items-center justify-end mobile-nav-menu"
                    to={"/chart"}
                  >
                    <li className="pt-4 pb-2 mr-4 scale-in-hor-right">Chart</li>
                    {/* <GiTeacher size={24} color='white' /> */}
                  </Link>
                  <hr />
                  <Link
                    to={"/tutorials"}
                    className="flex flex-row items-center justify-end mobile-nav-menu"
                  >
                    <li className="pb-2 mr-4 scale-in-hor-right">Tutorials</li>
                    {/* <BsPersonVideo size={24} color='white' /> */}
                  </Link>
                  <hr />
                  <Link
                    to={"/resources"}
                    className="flex flex-row items-center justify-end mobile-nav-menu"
                  >
                    <li className="pb-2 mr-4 scale-in-hor-right">Resources</li>
                    {/* <SiMaterialdesignicons size={24} color='white' /> */}
                  </Link>
                  <hr />
                  <Link
                    className="flex flex-row items-center justify-end mobile-nav-menu"
                    to={"/econs-calendar"}
                  >
                    <li className="pb-2 mr-4 scale-in-hor-right">
                      Economic Calendar
                    </li>
                    {/* <FaBlog size={24} color='white' /> */}
                  </Link>
                  <hr />
                  <Link
                    className="flex flex-row items-center justify-end mobile-nav-menu"
                    to={"/events"}
                  >
                    <li className="pb-2 mr-4 scale-in-hor-right">Events</li>
                    {/* <MdEventSeat size={24} color='white' /> */}
                  </Link>
                  <hr />
                  <Link className="flex flex-row items-center justify-end mobile-nav-menu">
                    <li className="mr-4 scale-in-hor-right">FAQS</li>
                    {/* <RiQuestionnaireFill size={24} color='white' /> */}
                  </Link>
                </div>
              )}
            </div>
          </>
        )}
        {!user && (
          <div className="flex sm:justify-end md:w-[70%]">
            <div className="">
              <Link to="/auth/register" className="">
                <button className="flex flex-row items-center justify-center px-8 py-2 text-green-500 bg-white rounded-lg">
                  {/* <AiFillProfile size={24} /> */}
                  <span className="mr-4">Login</span>
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
      {/* <a href="#navbar" className='hidden mr-4 to-top' id='toTop'>
            <button>Up</button>
        </a> */}
    </div>
  );
};

export default Navbar;
