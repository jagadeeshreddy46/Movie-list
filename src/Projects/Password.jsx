import React from "react";
import './2.css';
import { useNavigate } from "react-router-dom";
const Password=()=>{
  const navigate=useNavigate();
      return (
        <div>
          <main className="main">
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
              <div className="or">Message and data rates may apply</div>
              <button className="Sign">Send sign-in code</button>
              <div className="yes">OR</div>
              <button id="sigma" onClick={() => navigate("/signin")}>Use password</button>
              <div className="forgot">Forgot Email or Phone number</div>
              <label className="container">
                <input type="checkbox" defaultChecked="checked" />
                <span className="checkmark">Remember me</span>
              </label>
              <div className="new">New to Netflix?<a className="read" onClick={() => navigate("/")}>Sign Up now</a></div>
              <div className="last">This page is protected by Google reCAPTCHA to<br /> ensure you are not a bot.<span href="#" className="learn">Learn more.</span></div>
            </div>
          </main>
          </div>
      );
    }
  
  export default Password;