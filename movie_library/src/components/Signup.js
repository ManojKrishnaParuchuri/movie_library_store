import React, { useEffect, useState } from 'react';
import './Signup.css';
import { Link, useNavigate } from 'react-router-dom';

export default function Signup() {
  const [name, setName] = useState('');
  const [mobile, setMobile] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [message, setMessage] = useState('');
  const [loginMessage, setLoginMessage] = useState('');
  const [playlist] = useState([]);
  
  const navigate = useNavigate();

  useEffect(() => {
    const signUpButton = document.getElementById('signUp');
    const signInButton = document.getElementById('signIn');
    const container = document.getElementById('container');

    if (signUpButton && signInButton && container) {
      signUpButton.addEventListener('click', () => {
        container.classList.add("right-panel-active");
      });

      signInButton.addEventListener('click', () => {
        container.classList.remove("right-panel-active");
      });
    }

    return () => {
      if (signUpButton && signInButton) {
        signUpButton.removeEventListener('click', () => {
          container.classList.add("right-panel-active");
        });
        signInButton.removeEventListener('click', () => {
          container.classList.remove("right-panel-active");
        });
      }
    };
  }, []);

  const handleSignup = (e) => {
    e.preventDefault();
    // Directly navigate to the sign-in form
    document.getElementById('signIn').click();
  };

  const handleLogin = (e) => {
    e.preventDefault();
    // Directly navigate to the home page
    navigate('/home');
  };

  return (
    <>
      <div>
        <Link to='/contact' style={{ width: '120px', height: '20px', color: 'white', justifyContent: 'center', marginTop: '10px' }}>
          Contact Me
        </Link>
      </div>
      <div className='whole'>
        <div className='tex'>
          <h3>To enjoy Unlimited access to our website, please do login..</h3>
        </div>
        <br /><br /><br /><br />
        <div className="container" id="container">
          <div className="form-container sign-up-container">
            <form onSubmit={handleSignup}>
              <h1>Create Account</h1>
              <input className='sinput' type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
              <input className='sinput' type="number" placeholder="Mobile" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
              <input className='sinput' type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
              <input className='sinput' type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required /><br />
              <button type="submit">Sign Up</button>
              {message && <p className='para'>{message}</p>}
            </form>
          </div>
          <div className="form-container sign-in-container">
            <form onSubmit={handleLogin}>
              <h1>Sign in</h1>
              <br />
              <input className='sinput' type="email" placeholder="Email" value={loginEmail} onChange={(e) => setLoginEmail(e.target.value)} required />
              <input className='sinput' type="password" placeholder="Password" value={loginPassword} onChange={(e) => setLoginPassword(e.target.value)} required />
              <br /><br />
              <button type="submit">Sign In</button>
              {loginMessage && <p className='para'>{loginMessage}</p>}
            </form>
          </div>
          <div className="overlay-container">
            <div className="overlay">
              <div className="overlay-panel overlay-left">
                <h1>Welcome Back!</h1>
                <p>To keep connected with us please login with your personal info</p>
                <button className="ghost" id="signIn">Sign In</button>
              </div>
              <div className="overlay-panel overlay-right">
                <h1>Hello, Friend!</h1>
                <p>Enter your personal details and start journey with us</p>
                <button className="ghost" id="signUp">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
