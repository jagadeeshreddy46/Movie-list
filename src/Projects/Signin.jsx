import React from "react";
import './1.css';
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate=useNavigate();
  return (
    <div>
      <main className="sir">
        <header className="head">
          <section className="one">
            <img src={`${process.env.PUBLIC_URL}/netflix-removebg-preview.png`} alt="Landing Background" />
          </section>
        </header>
        <div className="otp">
          <div className="signin">Sign In</div>
          <form className="form">
            <label htmlFor="text">
              <input className="search" type="text" placeholder="Email or Mobile Number" />
            </label>
          </form>
          <form className="form">
            <label htmlFor="text">
              <input className="search" type="text" placeholder="Password" />
            </label>
          </form>
          <button className="Sign">Sign In</button>
          <div className="or">OR</div>
          <button id="sigma" onClick={() => navigate("/password")}>Use Sign-In Code</button>
          <div className="forgot">Forgot password?</div>
          <label className="container">
            <input type="checkbox" defaultChecked="checked" />
            <span className="checkmark">Remember me</span>
          </label>
          <div className="new">New to Netflix?<a className="read" onClick={() => navigate("/")}>Sign Up now</a></div>
          <div className="last">This page is protected by Google reCAPTCHA to<br /> ensure you are not a bot.<a href="learn">Learn more</a></div>
        </div>
      </main>
    </div>
  );
};
export default Signin;
