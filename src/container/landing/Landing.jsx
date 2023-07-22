import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import backImg from "../../assets/landing/backImg.jpg";
import frontImg from "../../assets/landing/frontImg.jpg";

const Landing = () => {
  return (
    <div className="landingContainer">
      <div
        className="container"
        data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000"
      >
        <input type="checkbox" id="flip" />
        <div className="cover">
          <div className="front">
            <img src={frontImg} alt="" />
            <div className="text">
              <span className="text-1">
                Discover | Learn | Invest | Trade <br /> Pips Bank
              </span>
              <span className="text-2">Let's get connected</span>
            </div>
          </div>
          <div className="back">
            <img className="backImg" src={backImg} alt="" />
            <div className="text">
              <span className="text-1">
                Complete miles of journey <br /> with one step
              </span>
              <span className="text-2">Let's get started</span>
            </div>
          </div>
        </div>
        <div className="forms">
          <div className="form-content">
            <div className="login-form">
              <div className="title">Login</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="text">
                    <a href="#fp">Forgot password?</a>
                  </div>
                  <div className="button input-box">
                    {/* <input type="submit" value="Sumbit" /> */}
                  </div>
                  <Link
                    to="/home"
                    className="p-2 rounded"
                    style={{ backgroundColor: "#7d2ae8", color: "white" }}
                  >
                    <button className=" demo-btn w-full font-semibold">
                      Submit
                    </button>
                  </Link>
                  <div className="text sign-up-text">
                    Don't have an account? <label for="flip">Sigup now</label>
                  </div>
                </div>
              </form>
            </div>
            <div className="signup-form">
              <div className="title">Signup</div>
              <form action="#">
                <div className="input-boxes">
                  <div className="input-box">
                    <i className="fas fa-user"></i>
                    <input type="text" placeholder="Enter your name" required />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      required
                    />
                  </div>
                  <div className="button input-box">
                    <input type="submit" value="Sumbit" />
                  </div>
                  <div className="text sign-up-text">
                    Already have an account? <label for="flip">Login now</label>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
