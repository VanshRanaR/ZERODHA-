import React from "react";

function CreateTicket() {
  return (
    <div className="container">
      <div className="row p-5 mt-5 mb-5">
        <h1 className="fs-5 mb-5">To create a ticket, select a relevant topic</h1>

        {/* Account Opening */}
        <div className="col-4 p-4">
          <h4>
            <i className="fa-solid fa-plus-circle"></i>
 Account Opening
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Online Account Opening</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Offline Account Opening</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Company, Partnership and HUF Account</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>NRI Account Opening</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Charges at Zerodha</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Zerodha IDFC FIRST Bank 3-in-1 Account</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Getting Started</a>
        </div>

        {/* Your Zerodha Account */}
        <div className="col-4 p-4">
          <h4>
            <i className="fa fa-user" aria-hidden="true"></i> Your Zerodha Account
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Login Credentials</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Account Modification and Segment Addition</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>DP ID and Bank Details</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Your Profile</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Transfer and Conversion of Shares</a>
        </div>

        {/* Trading & Platforms */}
        <div className="col-4 p-4">
          <h4>
            <i className="fa fa-line-chart" aria-hidden="true"></i> Your Zerodha Account
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Margin/Leverage, Product and Order Types</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Kite Web and Mobile</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Trading FAQs</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Corporate Actions</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Sentinel</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Kite API</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Pi and Other Platforms</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>StockReports+</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>GTT</a>
        </div>
      </div>

      {/* Funds, Console, Coin */}
      <div className="row p-5 mt-3 mb-5">
        <div className="col-4 p-4">
          <h4>
            <i className="fa fa-credit-card" aria-hidden="true"></i> Funds
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Adding Funds</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Fund Withdrawal</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>eMandates</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Adding Bank Accounts</a>
        </div>

        <div className="col-4 p-4">
          <h4>
            <i className="fa fa-circle-o" aria-hidden="true"></i> Console
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Reports</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Ledger</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Portfolio</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>60 Day Challenge</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>IPO</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Referral Program</a>
        </div>

        <div className="col-4 p-4">
          <h4>
            <i className="fa fa-circle-o" aria-hidden="true"></i> Coin
          </h4>
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Understanding Mutual Funds</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>About Coin</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Buying and Selling through Coin</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Starting an SIP</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Managing your Portfolio</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Coin App</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Moving to Coin</a><br />
          <a href="" style={{ textDecoration: "none", lineHeight: "2.2" }}>Government Securities</a>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
