import React from "react";

const Braceletname = () => {
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
        <a
          style={{ color: "#813C53" }}
          href="https://gemsmantra.com/collections"
        >
          Cat eye
        </a>
        ,
        <a
          style={{ color: "#813C53" }}
          href="https://gemsmantra.com/collections"
        >
          Amethyst
        </a>{" "}
        are best for you
      </div>
    </div>
  );
};

export default Braceletname;
