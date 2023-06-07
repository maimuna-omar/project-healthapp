

const Landingpage = () => {
    return (
      <div className="app-introduction">
        <h1>Welcome to Our My Health App!</h1>
        <p>Experience the best features and benefits of 
          setting your health goals.</p>
        <div className="key-features">
          <div className="feature">
         
            <h3>Plan your diet</h3>
            <p>tell me.</p>
          </div>
          <div className="feature">
            {/* image 2 */}
            <h3>Feature 2</h3>
            <p>about feature 2.</p>
          </div>
          <div className="feature">
            {/* {image 3} */}
            <h3>Feature 3</h3>
            <p>about feature three.</p>
          </div>
        </div>
        <button className="cta-button">TRY ME</button>
        <p className="login-link">MAIMUNA LOG IN PART<a href="/login">MAIMUNA</a></p>
      </div>
    );
  };
  
  export default Landingpage;