import React from "react";
import image3 from "../../Images/image3.gif";
import image2 from "../../Images/image2.gif";
import image1 from "../../Images/image1.gif";
import "./Landingpage.css";

const Landingpage = () => {
  return (
    <div className="app-introduction">
      <h1>Welcome to Our Health App!</h1>
      <p>Experience the best features and benefits of setting your health goals.</p>
      <div className="key-features"> 
        <img src={image2} alt="water" />
         <img src={image3} alt="water" />
        <img src={image1} alt="water" />
      </div>
      <button className="cta-button" >
        Get Started click login !
      </button>
    </div>
  );
};

export default Landingpage;


