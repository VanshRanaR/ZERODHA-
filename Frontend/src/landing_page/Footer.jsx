import React from "react";
function Footer() {
  return (
    <footer style={{backgroundColor: "rgb(250,250,250"}}>
    <div className="container border-top mt-5" >
      <div className="row mt-5">
        <div className="col">
          <img src="media/logo.svg" style={{ width: "50%" }} />
          <p>
            &copy; 2010 – 2025, Not Zerodha Broking Ltd. All rights reserved.
          </p>
        </div>
        <div className="col">
          <p>Company</p>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>About</a>
          <br />
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Products</a>
          <br />
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Pricing</a>
          <br />
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Referral programme</a>
          <br />
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Careers</a>
          <br />
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Zerodha.tech</a>
          <br />
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Press & media</a>
          <br />
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Zerodha cares (CSR)</a>
          <br />
        </div>
        <div className="col">
          <p>Support</p>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Contact</a>
          <br />
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Support portal</a>
          <br />
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Z-Connect blog</a>
          <br />
          <a href="" className="text-muted" style={{textDecoration:"none"}}>List of charges</a>
          <br />
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Downloads & resources</a>
        </div>
        <div className="col mb-5">
          <p>Account</p>
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Open an account</a>
          <br />
          <a href="" className="text-muted" style={{textDecoration:"none"}}>Fund transfer</a>
          <br />
          <a href="" className="text-muted" style={{textDecoration:"none"}}>60 day challenge</a>
          <br />
        </div>
      </div >
      <div className="mt-5 text-muted "style={{fontSize:"14px"}}>
        <p >
          Zerodha Broking Ltd.: Member of NSE & BSE – SEBI Registration no.:
          INZ000031633 CDSL: Depository services through Zerodha Securities Pvt.
          Ltd. – SEBI Registration no.: IN-DP-100-2015 Commodity Trading through
          Zerodha Commodities Pvt. Ltd. MCX: 46025 – SEBI Registration no.:
          INZ000038238 Registered Address: Zerodha, #153/154, 4th Cross, Dollars
          Colony, Opp. Clarence Public School, JP Nagar 4th Phase, Bengaluru -
          560078, Karnataka, India. For any complaints, please write to
          complaints@zerodha.com, for DP related to dp@zerodha.com. Please
          ensure you carefully read the Risk Disclosure Document as prescribed
          by SEBI.
        </p>
        <p>
          Procedure to file a complaint on SEBI SCORES: Register on SCORES
          portal. Mandatory details for filing complaints on SCORES: Name, PAN,
          Address, Mobile Number, E-mail ID, and Complaint details. Benefits:
          Effective Communication, Speedy redressal of the grievances.
        </p>
        <p>
          Investments in securities market are subject to market risks; read all
          the related documents carefully before investing.
        </p>
        <p>
          “Prevent unauthorised transactions in your account. Update your mobile
          numbers/email IDs with your stock brokers. Receive information of your
          transactions directly from Exchange on your mobile/email at the end of
          the day.”
        </p>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
