import React, { useState } from 'react';
import './LoginSignup.css';

const LoginSignup = () => {
  const [isLogin, setIsLogin] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [currentUser, setCurrentUser] = useState(null);

  const postUrl = 'http://localhost:8080/users';

  const handleLogin = (e) => {
    e.preventDefault();

    fetch(`${postUrl}?email=${email}&password=${password}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.length > 0) {
          console.log('Logged in successfully!');
          setCurrentUser(data[0]);
          setEmail('');
          setPassword('');
          setError('');
        } else {
          setError('Wrong email or password!');
        }
      })
      .catch((error) => {
        console.error('Error logging in:', error);
        setError('An error occurred while logging in. Please try again later.');
      });
  };

   console.log(currentUser);
   console.log(isLogin);
  const handleSignup = (e) => {
    e.preventDefault();
    if (password.length < 8) {
      setError('Password should be at least 8 characters long!');
      return;
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match!');
      return;
    }

    const newUser = {
      name: name,
      email: email,
      password: password,
    };

    fetch(postUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newUser),
    })
      .then((response) => response.json())
      .then((data) => {
      console.log('User signed up successfully!', data);
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
        setError('');
      })
      .catch((error) => {
        console.error('Error signing up:', error);
        setError('An error occurred while signing up. Please try again later.');
      });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="wrapper">
          <div className="title-text">
            {isLogin ? (
              <div className={`title ${isLogin ? '' : 'slide'}`}>Log In</div>
            ) : (
              <div className={`title ${isLogin ? 'slide' : ''}`}>Sign Up</div>
            )}
          </div>
          <div className="form-container">
            <div className="form-inner">
              <form onSubmit={isLogin ? handleLogin : handleSignup} className={isLogin ? '' : 'slide'}>
                {!isLogin && (
                  <div className="field">
                    <label htmlFor="name">Name:</label>
                    <input
                      type="text"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      className="input-field"
                      placeholder="Name"
                    />
                  </div>
                )}

                <div className="field">
                  <label htmlFor="email">Email:</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="input-field"
                    placeholder="Email"
                  />
                </div>

                <div className="field">
                  <label htmlFor="password">Password:</label>
                  <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="input-field"
                    placeholder="Password"
                  />
                </div>

                {!isLogin && (
                  <div className="field">
                    <label htmlFor="confirmPassword">Confirm Password:</label>
                    <input
                      type="password"
                      id="confirmPassword"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      className="input-field"
                      placeholder="Confirm Password"
                    />
                  </div>
                )}

                <div className="field">
                  <div className="error">{error}</div>
                  {currentUser && <div className="success">Logged in as {currentUser.name}!</div>}
                  <button type="submit" className="submit-btn">
                    {isLogin ? 'Log In' : 'Sign Up'}
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="toggle-link">
            {isLogin ? (
              <div>
                Don't have an account?{' '}
                <span onClick={() => setIsLogin(false)} className="link">
                  Sign Up
                </span>
              </div>
            ) : (
              <div>
                Already have an account?{' '}
                <span onClick={() => setIsLogin(true)} className="link">
                  Log In
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

