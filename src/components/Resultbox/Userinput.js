import React from "react";

const Userinput = () => {
  return (
    <div id="userInfoTableData">
      <div className="row" style={{ marginBottom: "60px", fontSize: "14px" }}>
        <div
          className="col-md-3"
          style={{ borderRight: "1px solid #664421", textAlign: "left" }}
        >
          <span style={{ fontWeight: "500" }}>Email</span> - bhoomi@gmail.com
          <br />
          <span style={{ fontWeight: "500" }}>Phone Number</span> - 9998787765
        </div>
        <div
          className="col-md-3"
          style={{ borderRight: "1px solid #664421", textAlign: "left" }}
        >
          <span style={{ fontWeight: "500" }}>Date of Birth</span> - 2024-02-21
          <br />
          <span style={{ fontWeight: "500" }}>Gender</span> - male
        </div>
        <div className="col-md-3" style={{ textAlign: "left" }}>
          <span style={{ fontWeight: "500" }}>Body Weight</span> - 44 kg
          <br />
          <span style={{ fontWeight: "500" }}>Birth Place</span> - Chhindwara
          Madhya Pradesh India
        </div>
      </div>
    </div>
  );
};

export default Userinput;
