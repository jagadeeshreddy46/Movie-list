import React from "react";
import { useNavigate } from "react-router-dom";

import './3.css';
export default function Netflix() {
  const navigate = useNavigate(); // Initialize the navigate function

  return (
    <div>
      <div className="si">
        <main className="main">
          <header className="head">
            <section className="one">
              <img src={`${process.env.PUBLIC_URL}/netflix-removebg-preview.png`} alt="Landing Background" />
              <label className="option" htmlFor="dropdown">
                <select id="dropdown" name="dropdown">
                  <option>English</option>
                  <option>Hindi</option>
                </select>
                {/* Navigate to Signin page on button click */}
                <button className="sign" onClick={() => navigate("/signin")}>
                  Sign in
                </button>
              </label>
            </section>
          </header>
          <section className="label">
            <h1>Unlimited Movies,<br />
              TV Shows and<br />
              more</h1>
            <p className="sub">Starts at ₹149. Cancel at any time.</p>
            <p className="ready">Ready to watch? Enter your email to create or restart your membership.</p>
          </section>
          <section className="mail">
            <form className="red">
              <label htmlFor="text">
                <input className="enter" type="text" placeholder="Enter your email address" />
              </label>
            <span className="hello"><button className="button">Get Started</button></span>
            </form>
          </section>
        </main>
      </div>
    </div>
  );
}

