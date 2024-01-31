import { Navigate, useNavigate } from "react-router-dom";
import image from "../assets/images/test.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import "../assets/css/Register.css";

function Register() {
	const [email, setEmail] = useState('');
	const [username, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const [confirmPassword, setConfirmPassword] = useState('');
	const [mobileNumber, setMobileNumber] = useState('');
	const [error, setError] = useState('');
  
	const isEmailValid = (email) => {
	  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	  return emailRegex.test(email);
	};
  
	const handleRegister = (e) => {
	  e.preventDefault();
  
	  if (!email || !username || !password || !confirmPassword || !mobileNumber) {
		setError('Please fill in all fields');
		return;
	  }
  
	  if (!isEmailValid(email)) {
		setError('Please enter a valid email address');
		return;
	  }
  
	  if (password !== confirmPassword) {
		setError('Passwords do not match');
		return;
	  }
  
	  
	  setEmail('');
	  setUsername('');
	  setPassword('');
	  setConfirmPassword('');
	  setMobileNumber('');
	  setError('');
	};
	return ( 
		<>



      <div className="main">
          <div className="image">
              <div className="text">
				<img src={image}/>
              </div>
              <form onSubmit={handleRegister}>
                  <h1 style={{ fontSize: 30 }}>Register</h1>
                  
                  <label>
                    Email:
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Enter your email"
                    />
                  </label>
                  
                  <label>
                    Username:
                    <input
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      placeholder="Enter your username"
                    />
                  </label>
                  
                  <label>
                    Password:
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                    />
                  </label>
                  
                  <label>
                    Confirm Password:
                    <input
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Confirm your password"
                    />
                  </label>
                  
                  <label>
                    Mobile Number:
                    <input
                      type="tel"
                      value={mobileNumber}
                      onChange={(e) => setMobileNumber(e.target.value)}
                      placeholder="Enter your mobile number"
                    />
                  </label>
                  
                  {error && <p className="paragraph">{error}</p>}
                  
                  <button Link to="/" className="btn-register" type="submit">Register</button>
                  
                  <p style={{ cursor: 'pointer' }}>
                    Already have an account?
                    <Link to="/login-signup"> Login</Link>
                  </p>
              </form>
          </div>
      </div>
    </>
  );
};


export default Register;