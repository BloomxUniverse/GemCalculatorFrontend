import React from "react";

const Gemsname = () => {
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
        <a
          style={{ color: "#813C53" }}
          href="https://gemsmantra.com/collections"
        >
          Ruby
        </a>{" "}
        (3 - 5 Ratti) is best for you
      </div>
    </div>
  );
};

export default Gemsname;
