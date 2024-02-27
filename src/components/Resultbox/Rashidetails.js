import React from "react";
import { useSelector } from "react-redux";
import store from "../../store/index";

const Rashidetails = () => {
  const dataView = useSelector((store) => store.result);

  return (
    <div id="calculatorIdName">
      <div className="row">
        <div className="col-md-2 col-11 d-flex align-items-center justify-content-center">
          <img
            className="rashiImageIcon"
            alt=""
            src={process.env.REACT_APP_RESOURCE_URL+"/rashi_image/"+ dataView.data.data.rashi.rashi+".png"}
          />
        </div>
        <div className="col-md-5 col-11 justify-content-center justify-content-md-start d-flex align-items-center rashiTitleText">
          Hello, {dataView.data.data.name}
          <br />
          Your Moon Sign is {dataView.data.data.rashi.rashi} 
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
