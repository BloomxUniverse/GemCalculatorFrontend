import React from "react";
import { useSelector } from "react-redux";
import store from "../../store/index";

const Braceletname = () => {
  const dataView = useSelector((store) => store.result);
  return (
    <div className="row">
      <div
        style={{ borderBottom: "0" }}
        className="col-4 col-md-2 HeadingTableData"
      >
        Bracelet
      </div>
      <div
        style={{ borderBottom: "0" }}
        id="braceletText"
        className="col-7 col-md-5 contentTableData"
      >
        {dataView.data.data.bracelet[0].name}
        {", "}
        {dataView.data.data.bracelet[1].name}
        {" "}
        is best for you
      </div>
    </div>
  );
};

export default Braceletname;
