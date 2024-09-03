import React, { useState } from "react";
import "./style.css";
import backImg from "../../assets/landing/backImg.jpg";
import frontImg from "../../assets/landing/frontImg.jpg";
import landingBG from "../../assets/landing/LandingBG.jpg";
// import { useNavigate } from "react-router-dom";
import { useLogin } from "../../hooks/useLogin";
import { useSignup } from "../../hooks/useSignup";

const Landing = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [specialPhrase, setSpecialPhrase] = useState("");
  const { login, errorLI, isLoadingLI } = useLogin();
  const { signup, errorSU, isLoadingSU } = useSignup();

  // const navigate = useNavigate();

  const handleSubmitLogin = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  const handleSubmitSignup = async (e) => {
    e.preventDefault();

    await signup(username, email, password, specialPhrase);
  };

  // const handleClick = () => {
  //   navigate("/home");
  // };

  return (
    <div className="landingContainer">
      <div
        className="absolute w-full h-full"
        style={{
          backgroundImage: `url(${landingBG})`,
          opacity: 0.3,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div
        className="container shadow-2xl"
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
                Discover | Learn | Invest | Trade <br /> Jugo Trading
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
                      name="email"
                      // required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      // required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="text">
                    <a href="#fp">Forgot password?</a>
                  </div>
                  <div className="button input-box" onClick={handleSubmitLogin}>
                    <input type="submit" value="Sumbit" disabled={isLoadingLI} />
                  </div>
                  {errorLI && <div className="text-sm text-red-500">{errorLI}</div>}

                  <div className="text sign-up-text">
                    Don't have an account? <label htmlFor="flip">Sigup now</label>
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
                    <input
                      type="text"
                      placeholder="Enter your name"
                      name="name"
                      onChange={(e) => setUsername(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-envelope"></i>
                    <input
                      type="text"
                      placeholder="Enter your email"
                      name="email"
                      // required
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your password"
                      // required
                      onChange={(e) => setPassword(e.target.value)}
                    />
                  </div>
                  <div className="input-box">
                    <i className="fas fa-lock"></i>
                    <input
                      type="password"
                      placeholder="Enter your special phrase"
                      // required
                      onChange={(e) => setSpecialPhrase(e.target.value)}
                    />
                  </div>
                  <div className="button input-box">
                    <input
                      type="submit"
                      value="Sumbit"
                      onClick={handleSubmitSignup}
                      disabled={isLoadingSU}
                    />
                  </div>
                  {errorSU && <div className="text-sm text-red-500">{errorSU}</div>}
                  <div className="text sign-up-text">
                    Already have an account? <label htmlFor="flip">Login now</label>
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
