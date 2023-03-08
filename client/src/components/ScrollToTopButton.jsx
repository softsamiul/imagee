import React, { useState, useEffect } from "react";
import {arrowToUp} from "../assets/index"

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    document.addEventListener("scroll", toggleVisibility);
    return () => {
      document.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const toggleVisibility = () => {
    if (window.pageYOffset > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  return (
    <>
      {isVisible && (
        <div className="scroll-to-top h-12 bg-black-100" onClick={scrollToTop}>
          
          
          <div className="position-fixed top-0 bottom-0 h-full w-full bg-slate-300 rounded-lg hover-eff">
            <img src= {arrowToUp} alt="Go to Top Icon" className="w-10 h-12 top-icon rounded-lg position-relative" />
          </div>
        </div>
      )}
    </>
  );
}

export default ScrollToTopButton;
