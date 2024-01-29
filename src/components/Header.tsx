import { useState } from "react";

export default function Header() {
  const [isMobileActive, setIsMobileActive] = useState<boolean>(false);
  return (
    <div className="site-header-outer">
      <div className="site-container">
        <div className="site-header-inner">
          {/* Desktop View */}
          <nav className="site-nav-desk site--desk-view">
            {/* Left Side */}
            <div className="left-wrapper isDesktop">
              {/* Image */}
              <div className="site-nav-imgbox">
                <img src="./images/logo.png" alt="" className="site-nav-img" />
              </div>
              {/* Navigation */}
              {/* <ul className="site-nav-grid">
                <li className="site-nav-griditem"></li>
              </ul> */}
            </div>
            {/* Hambarger */}
            <div className="left-wrapper isMobile">
              <div
                className={`site-ham-list ${
                  isMobileActive ? "site-ham-list--active" : ""
                }`}
                onClick={() => setIsMobileActive(!isMobileActive)}
              >
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
            {/* Right Side */}
            <div className="right-wrapper">
              <div className="acc-avatar-box">
                <img src="./images/avatar.svg" alt="" className="acc-avatar-img" />
              </div>
            </div>
          </nav>
          <nav className="site-nav-mob site--mob-view"></nav>
        </div>
      </div>
    </div>
  );
}
