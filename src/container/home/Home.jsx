import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Footer, RoomCard, TestimonialCard, CoursesCard } from "../../components";
import heroImage from "../../assets/home/business.jpg";
import communityImg from "../../assets/home/community.png";
import classPracImg from "../../assets/home/class.png";
import liveImg from "../../assets/home/live.png";
import teamSpiritSVG from "../../assets/home/team_spirit.svg";
import pbBegImg from '../../assets/home/pb-beginners.jpg';
import pbMentImg from '../../assets/home/pb-mentorship.jpg';
import "./homeStyle.css";
import { BsYoutube } from "react-icons/bs";
import { SiSessionize } from "react-icons/si";
import { GiTeacher } from "react-icons/gi";
import { AiFillLike } from "react-icons/ai";

const Home = () => {
  return (
    <div>
      <Navbar />
      <main data-aos="fade-up" data-aos-duration="1000">
        {/* Hero section */}
        <section
          className="w-full flex flex-col md:flex-row items-center mb-12"
          style={{ backgroundColor: "#efefef" }}
        >
          <div className="w-full md:w-100-50">
            <img src={heroImage} alt="Pips Bank" />
          </div>
          <div className="w-full md:w-100-50 flex flex-col justify-center items-center my-6 px-6 md:px-12">
            <h3
              className="text-2xl md:text-4xl font-semibold md:font-bold text-center md:my-0"
              style={{ color: "#3d9e40" }}
            >
              LEARN - DISCOVER <br /> INVEST - TRADE
            </h3>
            <br />
            <p>
              The elements of good trading are: cutting losses, cutting losses,
              and cutting losses. If you can follow these three rules, you may
              have a chance.
              <span className="block text-right">-Ed Seykota</span>
            </p>
            <div className="w-full flex justify-around items-center mt-8 md:mt-20">
              <button className="hero-btn1 bg-red-500 py-4 px-6 rounded-lg flex flex-row items-center justify-center">
                <SiSessionize size={24} className="mr-4" />
                <Link to="/">Sessions</Link>
              </button>
              <button
                className="hero-btn2 text-white py-4 px-6 rounded-lg flex flex-row items-center justify-center"
                style={{ backgroundColor: "#333" }}
              >
                <GiTeacher size={24} className="mr-4" />
                <Link to="/mentorship">Mentorship</Link>
              </button>
            </div>
          </div>
        </section>
        {/* End of Hero Section */}

        {/* Room Section */}
        <section className="w-full flex flex-col px-6 md:px-12 my-6">
          <div className="w-full">
            <h3 className="text-2xl md:text-4xl font-semibold md:font-bold capitalize text-center">
              join us in <u style={{ color: "#f56565" }}>our room</u>
            </h3>
            <br />
          </div>
          <div className="w-full flex flex-col md:flex-row items-center justify-between">
            <RoomCard
              cardImage={communityImg}
              title={"community"}
              text={
                "We have a community of over 20,000 Forex Traders where continuous Technical and Fundamental analysis is beingshared"
              }
              linkName={"join our telegram"}
              linkTo={"/"}
              cardClass={
                "room-btn1 w-full py-4 rounded-lg capitalize font-semibold"
              }
              animeName={"fade-right"}
              animeDelay={"500"}
            />
            <RoomCard
              cardImage={classPracImg}
              title={"practical class"}
              text={
                "You are at your pace of learning because we do believe how unique people are, that's what Pips Bank offers."
              }
              linkName={"link up with tutor"}
              linkTo={"/"}
              cardClass={
                "room-btn2 w-full py-4 rounded-lg capitalize font-semibold"
              }
              animeName={"zoom-in-up"}
              animeDelay={"700"}
            />
            <RoomCard
              cardImage={liveImg}
              title={"Stream us"}
              text={
                "Join on discuss live chart. You get to know and understand certain things that can't be taught in book but through streaming"
              }
              linkName={"follow for great staffs"}
              linkTo={"/"}
              cardClass={
                "room-btn3 w-full py-4 rounded-lg capitalize font-semibold"
              }
              animeName={"fade-left"}
              animeDelay={"900"}
            />
          </div>
        </section>
        {/* End of Room section */}

        {/* YT Subscription Section */}
        <section className="w-full flex flex-col md:flex-row px-6 md:px-12 my-6">
          <div
            className="w-full rounded-lg p-4 md:py-12 flex flex-col md:flex-row justify-between items-center"
            style={{ backgroundColor: "#FFEFC6" }}
          >
            <br />
            <div
              className="sub1 flex flex-row items-center"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <BsYoutube size={80} color="red" />
              <h3 className="text-5xl md:text-6xl font-semibold md:font-bold">
                YouTube
              </h3>
            </div>
            <br />
            <br />
            <div
              className="sub2 text-center"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h3 className="text-2xl font-semibold capitalize">
                stay connected
              </h3>
              <h3 className="text-lg md:text-3xl font-semibold md:font-bold capitalize px-6 md:px-0">
                Never miss out, subscribe <br className="hidden md:flex" /> our
                YouTube channel
              </h3>
            </div>
            <br />
            <br />
            <div className="sub3" data-aos="fade-up" data-aos-duration="800">
              <Link className="">
                <button className="subscribe-btn bg-red-500 py-4 px-12 rounded-lg text-white flex flex-row justify-center items-center">
                  <span className="mr-4">Join Now</span>
                  <AiFillLike size={24} />
                </button>
              </Link>
            </div>
            <br />
          </div>
        </section>
        {/* End of YT Subscription Section */}

        {/* Testimonials Section */}
        <section className="w-full flex flex-col md:flex-row px-6 md:px-24 my-12">
          <div className="w-full md:w-100-60 flex flex-col">
            <img src={teamSpiritSVG} alt="com" className="md:w-100-30" /> <br />
            <h3 className="text-2xl md:text-3xl font-bold capitalize">
              See What other <br className="md:block hidden" /> traders are
              saying...
            </h3>
            <br />
            <p className="opacity-75 md:w-100-40">
              Review, Testimony and real profit result is what we get as
              feedback from our community .
            </p>
            <br />
            <p className="opacity-75 capitalize">
              Join Our Winning Team 
              <Link className="ml-4 text-red-600 underline">Join Now</Link>
            </p>
          </div>
          <div className="w-full md:w-100-40 relative flex flex-col md:flex-row">
            <TestimonialCard testimonialUser={"Lawson"} testimonialSaying={"I respect you.. I caught some pips on GBPUSD and exited. Big thanks!"} animeName={"fade-left"} animeDelay={"500"} />
            <TestimonialCard testimonialUser={"Gabriel"} testimonialSaying={"You are oneof the most humble successful traders I've ever met. I really appreciate for creating this wonderful community."} animeName={"fade-left"} animeDuration={"700"} />
            <TestimonialCard testimonialUser={"Obarima"} testimonialSaying={"This amazing analysis, I say a very big thank you because i took advantage of it and to be honest I made great out of it."} animeName={"fade-left"} animeDuration={"900"} />
          </div>
        </section>
        {/* End of Testimonial Section */}

        {/* Courses Section */}
        <section className="w-full px-6 md:px-12 my-12">
            <h3 className="text-3xl font-bold text-center capitalize">Learn Forex Trading <br className="hidden md:block" /> from A-Z with us for free</h3>
            <div className="flex flex-col md:flex-row items-center justify-around">
              <div className="w-full md:w-100-60">
                <CoursesCard courseThumbnail={pbBegImg} courseLevel={"Intermediate"} coursetitle={"Live Trading and Training"} courseDescription={"Watch us trade live and learn how we catch trands early..."} />
              </div>
              <div className="w-full md:w-100-60 ">
                <CoursesCard courseThumbnail={pbMentImg} courseLevel={"All_Levels"} coursetitle={"Beginners Class"} courseDescription={"This course contains everything you need to know about forex..."} />
              </div>
            </div>
        </section>
        {/* End of courses Section */}
      </main>
      <Footer />
    </div>
  );
};

export default Home;
