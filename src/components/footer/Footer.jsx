import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/general/logo1.gif';
import { BsInstagram, BsYoutube, BsLinkedin, BsTwitter } from 'react-icons/bs';
import './footerStyle.css';

const Footer = () => {
  return (
    <>
      <footer className="flex flex-col md:flex-row justify-between w-full md:px-2 text-white md:px-12 py-12">

        <div className="footer1 w-full md:w-100-70">
          <div className="md:w-100-20 w-100-50">
              <Link to='/' className='w-100-50 md:w-100-30'>
                  <img src={logo} alt="logo" className="md:w-100-50" />
              </Link>
          </div><br />
          <p>
            Pips Bank offers information and educational materials for both beginners and pros. 
            Keep in mind that for everything to work well it begins with the mindset.
          </p><br />
          <p>
            &copy; 2023 Pips-Bank . All Rights Reserved <br /> Developed by: <Link to='bankidev.netlify.app'>BankiDev</Link>
          </p>
        </div><br /><br />

        <div className="footer2 flex flex-col md:flex-row w-full md:w-100-70">
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
            <Link>
              <li className='mr-4 opacity-75'>Events</li>
            </Link><br />
            <Link>
              <li className='mr-4 opacity-75'>Live Session</li>
            </Link>
          </ul>
        </div><br /><br />

        <div className="footer3 w-full md:w-100-70">
          <h3 className="font-semibold text-lg">Sign Up for Our Newsletter</h3>
          <div className="form relative flex flex-col"><br />
            <label htmlFor="name" className='mb-4'><b>Name <span className='text-red-500'> *</span></b></label>
            <input type="text" name="name" id="name" placeholder='Name' className='bg-gray-300 border-2 rounded p-2' required /><br />
            <label htmlFor="email" className='mb-4'><b>Email <span className='text-red-500'> *</span></b></label>
            <input type="email" name="email" id="email" placeholder='Email' className='bg-gray-300 border-2 rounded p-2' required /><br />
            <p>
              <b>
                Would you like to take a masterclass to guide you daily on what profitable trades to take?
              </b><br />
              <span className='block mt-2 flex '>
                <input type="radio" name="yesNo" id="yes" className='mr-1' />
                <label htmlFor="yes">Yes</label>
              </span>
              <span className='block mt-2 flex '>
                <input type="radio" name="yesNo" id="no" className='mr-1' />
                <label htmlFor="no">No</label>
              </span>
              <p className='mt-4'>
                Receive weekly newsletter with educational materials, popular books and much more!
              </p>
            </p>
            <input type="submit" value="Subscribe" className='bg-red-500 absolute font-bold text-xl py-2 px-6 rounded submit-btn' />
          </div><br />

          <b><u>Follow our Social Media:</u></b>
          <div className="social-media flex items-center mt-2">
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