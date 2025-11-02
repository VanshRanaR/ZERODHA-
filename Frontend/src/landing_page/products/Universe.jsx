import React from 'react';

function Universe() {
  return (
    <div className="container mt-5">
      <div className="row text-center">
        <h1>The Zerodha Universe</h1>
        <p className='text center'>
          Extend your trading and investment experience even further with our partner platforms.
        </p>

        <div className="col-4 p-3 mt-5">
          <img src="media/smallcaseLogo.png" alt="Smallcase" className="img-fluid" style={{ width: "150px", height: "auto" }} />
          <p className="text-muted text-small">Thematic investment platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/streakLogo.png" alt="Streak" className="img-fluid" style={{ width: "150px", height: "auto" }} />
          <p className="text-muted text-small">Algo & Strategy platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/sensibullLogo.svg" alt="Sensibull" className="img-fluid" style={{ width: "150px", height: "auto" }} />
          <p className="text-muted text-small">Options trading platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/zerodhaFundhouse.png" alt="Zerodha Fundhouse" className="img-fluid" style={{ width: "150px", height: "auto" }} />
          <p className="text-muted text-small">Asset management platform</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/goldenpiLogo.png" alt="GoldenPi" className="img-fluid" style={{ width: "150px", height: "auto" }} />
          <p className="text-muted text-small">Bonds & fixed income</p>
        </div>

        <div className="col-4 p-3 mt-5">
          <img src="media/dittoLogo.png" alt="Ditto" className="img-fluid" style={{ width: "150px", height: "auto" }} />
          <p className="text-muted text-small">Insurance advisory</p>
        </div>
        <button className='p-2 btn btn-primary fs-5 mb-5' style={{width:"20%", margin:"0 auto"}}>SignUp Now</button>
      </div>
    </div>
  );
}

export default Universe;
