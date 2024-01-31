import { Link, useNavigate } from 'react-router-dom';
import image from "../assets/images/test.png";
import { useState } from 'react';
import "../assets/css/Login.css";
// import { useHistory } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate=useNavigate();
  // const history = useHistory();



  const isEmailValid = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (email === "admin@gmail.com") {
      navigate("/dashboard/admin");
    } else {
      navigate("/dashboard");
    }
    if (!email || !password) {
      setError('Please fill in all fields');
      return;
    }

    
    if (!isEmailValid(email)) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoggedIn(true);
    history.push('/home?isloggedIn=true');
    navigate("/");

    setEmail('');
    setPassword('');
    setError('');
  };
  

  return (
    <>
      <div className="main">
          <div className="image">
              <div className="text">
                  <img src={image} alt="Login" />    
              </div>
              <form  onSubmit={handleLogin}>
                  <h1 style={{fontSize:30}}>Login</h1>
                  
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
                  Password:
                  <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="Enter your password"
                  />
                  </label>
                  {error && <p className="paragraph">{error}</p>}  
                  <button  className="btn-login" type="submit">Login</button>
                  <p style={{cursor:'pointer'}}>Don't have an account?
                  <Link to="/register"> Sign up</Link></p>
              </form>
          </div>
      </div>
    </>
  );
};

export default LoginPage;