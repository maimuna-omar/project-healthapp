import React from 'react';
import './Landingpage.css';
import image1 from '../../Images/image1.gif';
import image2 from '../../Images/image2.gif';
import image3 from '../../Images/image3.gif';

// import "./components/Landingpage/Landingpage.css";


const Landingpage = ({clickHandler}) => {
    return (
      
      <div className="app-introduction">
        <h1>Welcome to Our Health App!</h1>
        <p>Experience the best features and benefits of 
          setting your health goals.</p>
        <div className="key-features">
          {/* <div className="feature">
            <img src={image1} alt="Diet" />
            <h3>Plan your diet</h3>
            <p className="small-paragraph">Elevate your vitality and nourish your body with wholesome nutrition - embrace the power of healthy eating for a vibrant life.</p>
           
          </div> */}
          
          <div className="feature">
          <img src={image3} alt="water" />
                    {/* <h3>Plan your sleep</h3> */}
            {/* <p className="small-paragraph">Prioritize your sleep for a brighter tomorrow - adequate rest fuels your productivity, enhances mood, and fortifies your overall well-being.</p> */}
          </div>
          {/* <div className="feature">
          <img src={image2} alt="water" />
            <h3>Plan your water intake</h3>
            <p className="small-paragraph">Stay hydrated and energized with water - the essential elixir for a healthier body and sharper mind.</p>
          </div> */}
        </div>
        {/* <Link to="/login" className="cta-button">Get Started</Link> */}

        {/* <button className="cta-button" onClick={()=>clickHandler()}>Get Started</button> */}
        <button className="cta-button" onClick={clickHandler}>Get Started</button>

      
      </div>
      <button onClick={handleGetStarted} className="cta-button">
        Get Started
      </button>
    </div>
  );
};

export default Landingpage;
