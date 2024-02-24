import React from "react";

const Braceletitem = () => {
  return (
    <>
      <div className="col-xl-3 col-sm-6 col-lg-4 col-md-6 showItemsInBox">
        <img
          src="https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/bracelet/Cat eye.png"
          alt="https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/bracelet/Cat eye"
          style={{ width: "100%" }}
        />
        <p>Cat eye</p>
        <a href="https://gemsmantra.com/products/silliminate-bracelet">
          Buy Now
        </a>
      </div>

      <div className="col-xl-3 col-sm-6 col-lg-4 col-md-6 showItemsInBox">
        <img
          src="https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/bracelet/Amethyst.png"
          alt="https://gemsmantra.in/wp-content/plugins/plugin-astrologyCalculatorBloomx/bracelet/Amethyst"
          style={{ width: "100%" }}
        />
        <p>Amethyst</p>
        <a href="https://gemsmantra.com/products/amethyst-bracelet">Buy Now</a>
      </div>
    </>
  );
};

export default Braceletitem;
