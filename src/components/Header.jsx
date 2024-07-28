import React from "react";
import leftarrow from "../../public/images/leftarrow.svg";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="header-upper-container">
      <div className="left-container">
        <div className="inside-lc">
          <img className="inside-lc-icon" src={leftarrow.src} alt="" />
        </div>
        <div className="content">Test3_staging</div>
        <div className="primary-btn">Primary feed</div>
      </div>
      <div className="right-container">
        <div className="btn">
          <Button className="inside-btn" variant="outline">
            Publish feed
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Header;
