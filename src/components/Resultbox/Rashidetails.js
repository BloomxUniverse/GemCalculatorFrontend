import React from "react";

const Rashidetails = () => {
  return (
    <div id="calculatorIdName">
      <div className="row">
        <div className="col-md-2 col-11 d-flex align-items-center justify-content-center">
          <img
            className="rashiImageIcon"
            alt=""
            src="https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/img/rashi/Cancer.png"
          />
        </div>
        <div className="col-md-5 col-11 justify-content-center justify-content-md-start d-flex align-items-center rashiTitleText">
          Hello, bhumika shukla!
          <br />
          Your Moon Sign is Cancer (कर्क)
        </div>
        <br />
        <div className="jsthissugg">
          This suggestion is according to your moon sign :
        </div>
      </div>
    </div>
  );
};

export default Rashidetails;
