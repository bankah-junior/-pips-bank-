import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/general/logo1.gif';
import { BsInstagram, BsYoutube, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './footerStyle.css';

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col justify-between w-full py-12 text-white md:flex-row md:px-12">

        <div className="w-full footer1 md:w-[30%]">
          <div className="md:w-4/5 w-1/2">
              <Link to='/home' className='w-1/2 md:w-[70%]'>
                  <img src={logo} alt="logo" className="md:w-1/2" />
              </Link>
          </div><br />
          <p>
            Pips Bank offers information and educational materials for both beginners and pros. 
            Keep in mind that for everything to work well it begins with the mindset.
          </p><br />
          <p>
            &copy; 2024 Pips-Bank . All Rights Reserved <br /> Developed by: <Link to='https://bankidev.netlify.app'>Bankah</Link>
          </p>
        </div><br /><br />

        <div className="flex flex-col w-full footer2 md:flex-row md:w-[30%]">
          <ul className='flex flex-row md:flex-col md:mr-12'>
            <Link>
              <li className='mr-4 opacity-75'>About Us</li>
            </Link><br />
            <Link to="/resources">
              <li className='mr-4 opacity-75'>Resources</li>
            </Link><br />
            <Link to="/tutorials">
              <li className='mr-4 opacity-75'>Tutorials</li>
            </Link>
          </ul> <br />
          <ul className='flex flex-row md:flex-col'>
            <Link>
              <li className='mr-4 opacity-75'>Contact Us</li>
            </Link><br />
            <Link to={"/events"}>
              <li className='mr-4 opacity-75'>Events</li>
            </Link><br />
            <Link>
              <li className='mr-4 opacity-75'>Live Session</li>
            </Link>
          </ul>
        </div><br /><br />

        <div className="w-full footer3 md:w-[30%]">
          <h3 className="text-lg font-semibold">Sign Up for Our Newsletter</h3>
          <div className="relative flex flex-col form"><br />
            <label htmlFor="name" className='mb-4'><b>Name <span className='text-red-500'> *</span></b></label>
            <input type="text" name="name" id="name" placeholder='Name' className='p-2 bg-gray-300 border-2 rounded' required /><br />
            <label htmlFor="email" className='mb-4'><b>Email <span className='text-red-500'> *</span></b></label>
            <input type="email" name="email" id="email" placeholder='Email' className='p-2 bg-gray-300 border-2 rounded' required /><br />
            <p>
              <b>
                Would you like to take a masterclass to guide you daily on what profitable trades to take?
              </b><br />
              <span className='flex mt-2 '>
                <input type="radio" name="yesNo" id="yes" className='mr-1' />
                <label htmlFor="yes">Yes</label>
              </span>
              <span className='flex mt-2 '>
                <input type="radio" name="yesNo" id="no" className='mr-1' />
                <label htmlFor="no">No</label>
              </span>
              <p className='mt-4'>
                Receive weekly newsletter with educational materials, popular books and much more!
              </p>
            </p>
            <input type="submit" value="Subscribe" className='absolute px-6 py-2 text-xl font-bold bg-red-500 rounded submit-btn' />
          </div><br />

          <b><u>Follow our Social Media:</u></b>
          <div className="flex items-center mt-2 social-media">
            <Link to='https://twitter.com/iam_bankah?t=UFouGnCo6AL1bxU_MMVRg&s=09' title='Twitter'>
              <BsTwitter size={27} color='#0072B1' className='mr-8' />
            </Link>
            <Link to='https://www.instagram.com/@iam.bankah' title='Instagram'>
              <BsInstagram size={27} color='' className='mr-8' />
            </Link>
            <Link to='https://www.youtube.com/@welearn2?sub_confirmation=1' title='YouTube'>
              <BsYoutube size={27} color='#C4302B' className='mr-8' />
            </Link>
            <Link to='https://www.linkedin.com/in/anthony-bekoe-bankah-080448240' title='LinkedIn'>
              <BsLinkedin size={27} color='#0072B1' className='mr-8' />
            </Link>
          </div>
        </div>

      </footer>
    </>
  )
}

export default Footer