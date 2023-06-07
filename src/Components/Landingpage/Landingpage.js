import  './Landingpage.css'
const Landingpage = () => {
    return (
        <body> 
      <div className="app-introduction">
        <h1>Welcome to Our Health App!</h1>
        <p>Experience the best features and benefits of 
          setting your health goals.</p>
        <div className="key-features">
          <div className="feature">
            <h3>Plan your diet</h3>
            <p className="small-paragraph">Elevate your vitality and nourish your body with wholesome nutrition - embrace the power of healthy eating for a vibrant life.</p>
             {/* image 22 */}
          </div>
          <div className="feature">
            {/* image 2 */}
            <h3>Plan your sleep</h3>
            <p className="small-paragraph">Prioritize your sleep for a brighter tomorrow - adequate rest fuels your productivity, enhances mood, and fortifies your overall well-being.</p>
          </div>
          <div className="feature">
            {/* {image 3} */}
            <h3>Plan your water intake</h3>
            <p className="small-paragraph">Stay hydrated and energized with water - the essential elixir for a healthier body and sharper mind.</p>
          </div>
        </div>
        <button className="cta-button">Get Started</button>
        
      </div>
      </body>
    );
  };
  
  export default Landingpage;