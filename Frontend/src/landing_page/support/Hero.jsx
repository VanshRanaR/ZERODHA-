import React from "react";


function Hero() {
  return (
    <section className="container-fluid" id="supportHero">
      <div className="row p-5 mt-5 mb-5" id="supportWrapper">
        {/* Left Side */}
        <div className="col-6">
          <h6>Support Portal</h6>
          <h4>Search for an answer or browse help topics to create a ticket</h4>
          <input
            type="text"
            placeholder="Eg: how do I activate F&O, why is my order getting rejected..."
            className="form-control my-3"
          />

          <div className="links">
            <a href="">Track account opening</a>
            <a href="">Track segment activation</a>
            <a href="">Intraday margins</a>
            <a href="">Kite user manual</a>
          </div>
        </div>
        <div className="col-1"></div>
        {/* Right Side */}
        <div className="col-5 p-2">
          <h6>Featured</h6>
          <ol>
            <li>
              <a href="">Current Takeovers and Delisting – January 2024</a>
            </li>
            <li>
              <a href="">Latest Intraday leverages – MIS & CO</a>
            </li>
          </ol>
          <a href="" id="trackTickets">Track Tickets</a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
