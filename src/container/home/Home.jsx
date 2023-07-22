import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Footer, RoomCard } from '../../components';
import heroImage from '../../assets/home/business.jpg';
import communityImg from '../../assets/home/community.png';
import classPracImg from '../../assets/home/class.png';
import liveImg from '../../assets/home/live.png';
import './homeStyle.css';
import { BsYoutube } from 'react-icons/bs';

const Home = () => {
  return (
    <div>
      <Navbar />
      <main data-aos="fade-up" data-aos-duration="500">
        
        {/* Hero section */}
        <section className='w-full flex flex-col md:flex-row items-center mb-12' style={{backgroundColor: "#efefef"}}>
          <div className="w-full md:w-100-50">
            <img src={heroImage} alt="Pips Bank" />
          </div>
          <div className="w-full md:w-100-50 flex flex-col justify-center items-center my-6 px-6 md:px-12">
            <h3 className="text-2xl md:text-4xl font-semibold md:font-bold text-center md:my-0" style={{color: "#3d9e40"}}>
              DISCOVER - LEARN <br /> EARN - TRADE
            </h3><br />
            <p>
              The elements of good trading are:
              cutting losses, 
              cutting losses, and 
              cutting losses. If you can follow these three rules, you may have a chance.
              <span className="block text-right">-Ed Seykota</span>
            </p>
            <div className="w-full flex justify-around items-center mt-8 md:mt-20">
              <button className='hero-btn1 bg-red-500 py-4 px-8 rounded-lg'>
                <Link to='/'>Live Session</Link>
              </button>
              <button className='hero-btn2 text-white py-4 px-8 rounded-lg' style={{backgroundColor: "#333"}}>
                <Link to='/mentorship'>Mentorship</Link>
              </button>
            </div>
          </div>
        </section>
        {/* End of Hero Section */}

        {/* Room Section */}
        <section className='w-full flex flex-col px-6 md:px-12 my-6'>
          <div className="w-full">
            <h3 className="text-2xl md:text-4xl font-semibold md:font-bold capitalize text-center">
              join us in <u style={{color: "#f56565"}}>our room</u>
            </h3><br />
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <RoomCard 
              cardImage={communityImg} 
              title={"community"} 
              text={"We have a community of over 20,000 Forex Traders where continuous Technical and Fundamental analysis is beingshared"} 
              linkName={"join our telegram"}
              linkTo={"/"}
              cardClass={"room-btn1 w-full py-4 rounded-lg capitalize font-semibold"}
              animeName={"fade-right"}
              animeDelay={"500"}
            />
            <RoomCard 
              cardImage={classPracImg} 
              title={"practical class"} 
              text={"You are at your pace of learning because we do believe how unique people are, that's what Pips Bank offers."} 
              linkName={"link up with tutor"}
              linkTo={"/"}
              cardClass={"room-btn2 w-full py-4 rounded-lg capitalize font-semibold"} 
              animeName={"zoom-in-up"}
              animeDelay={"700"}
            />
            <RoomCard 
              cardImage={liveImg} 
              title={"Stream us"} 
              text={"Join on discuss live chart. You get to know and understand certain things that can't be taught in book but through streaming"} 
              linkName={"follow for great staffs"}
              linkTo={"/"}
              cardClass={"room-btn3 w-full py-4 rounded-lg capitalize font-semibold"} 
              animeName={"fade-left"}
              animeDelay={"900"}
            />
          </div>
        </section>
        {/* End of Room section */}

        {/* YT Subscription Section */}
        <section className='w-full flex flex-col md:flex-row px-6 md:px-12 my-6'>
          <div className="w-full rounded-lg p-4 md:py-12 flex flex-col md:flex-row justify-between items-center" style={{backgroundColor: "#FFEFC6"}}>
            <br />
            <div className="sub1 flex flex-row items-center">
              <BsYoutube size={80} color='red' />
              <h3 className="text-5xl md:text-6xl font-semibold md:font-bold">YouTube</h3>
            </div><br /><br />
            <div className="sub2 text-center">
              <h3 className="text-2xl font-semibold capitalize">stay connected</h3>
              <h3 className="text-lg md:text-3xl font-semibold md:font-bold capitalize px-6 md:px-0">
                Never miss out, subscribe <br className='hidden md:flex' /> our YouTube channel
              </h3>
            </div><br /><br />
            <div className="sub3">
              <Link className="">
                <button className='subscribe-btn bg-red-500 py-4 px-12 rounded-lg text-white'>Join Now</button>
              </Link>
            </div>
            <br />
          </div>
        </section>
        {/* End of YT Subscription Section */}

        <section className='w-full flex flex-col md:flex-row px-6 md:px-12'>
          <div className="w-full md:w-100-50">Left side 4</div>
          <div className="w-full md:w-100-50">Right side 4</div>
        </section>

        <section className='w-full flex flex-col md:flex-row px-6 md:px-12'>
          <div className="w-full md:w-100-50">Left side 5</div>
          <div className="w-full md:w-100-50">Right side 5</div>
        </section>

      </main>
      <Footer />
    </div>
  )
}

export default Home