import React from "react";
import { useSelector } from "react-redux";
import store from "../../store/index";

const Gemsname = () => {
  const dataView = useSelector((store) => store.result);
  return (
    <div className="row">
      <div
        style={{ borderBottom: "0" }}
        className="col-4 col-md-2 HeadingTableData"
      >
        Gems
      </div>
      <div
        style={{ borderBottom: "0" }}
        id="gemsText"
        className="col-7 col-md-5 contentTableData"
      >
        {dataView.data.data.gems[0].name}
        {" "}
        is best for you
      </div>
    </div>
  );
};

export default Gemsname;
