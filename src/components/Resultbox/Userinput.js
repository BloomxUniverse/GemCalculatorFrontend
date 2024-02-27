import React from "react";
import { useSelector } from "react-redux";
import store from "../../store/index";

const Userinput = () => {
  const dataView = useSelector((store) => store.result);

  return (
    <div id="userInfoTableData">
      <div className="row" style={{ marginBottom: "60px", fontSize: "14px" }}>
        <div
          className="col-md-3"
          style={{ borderRight: "1px solid #664421", textAlign: "left" }}
        >
          <span style={{ fontWeight: "500" }}>Email</span> -{" "}
          {dataView.data.data.email}
          <br />
          <span style={{ fontWeight: "500" }}>Phone Number</span> -{" "}
          {dataView.data.data.mobile}
        </div>
        <div
          className="col-md-3"
          style={{ borderRight: "1px solid #664421", textAlign: "left" }}
        >
          <span style={{ fontWeight: "500" }}>Date of Birth</span> -{" "}
          {dataView.data.data.date}
          <br />
          <span style={{ fontWeight: "500" }}>Gender</span> -{" "}
          {dataView.data.data.gender}
        </div>
        <div className="col-md-3" style={{ textAlign: "left" }}>
          <span style={{ fontWeight: "500" }}>Body Weight</span> -{" "}
          {dataView.data.data.body_weight}
          <br />
          <span style={{ fontWeight: "500" }}>Birth Place</span> -{" "}
          {dataView.data.data.birth_place}
        </div>
      </div>
    </div>
  );
};

export default Userinput;
