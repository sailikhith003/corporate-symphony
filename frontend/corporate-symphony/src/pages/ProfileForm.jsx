import React,{ useState } from 'react';
import "../assets/css/ProfileForm.css";
import { Sidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Link } from 'react-router-dom';


const ProfileForm = ({ onSubmit }) => {
    const [toggled, setToggled] = React.useState(false);

  const [formData, setFormData] = useState({
    name: '',
    username: '',
    password: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData);
  };

  return (
    <>
    {/* Sidebar code */}
    <Sidebar
      onBackdropClick={() => setToggled(false)}
      toggled={toggled}
      breakPoint="all"
      collapsed={false}
      backgroundColor="white"
    >
      <Menu>
        <MenuItem component={<Link to="/myevents" />}> Booked Events</MenuItem>
        <MenuItem component={<Link to="/pastevents" />}> Past Events</MenuItem>
        <MenuItem component={<Link to="/eventlist" />}> Events List</MenuItem>
        <MenuItem component={<Link to="/profile" />}> Profile</MenuItem>
        <MenuItem component={<Link to="/" />}>Home</MenuItem>
        <MenuItem component={<Link to="/"/>}> Logout</MenuItem>
      </Menu>
    </Sidebar>
    
    {/* Main content */}
    <div className="dashboardContent">
      <main
        className="topBar"
        style={{
          display: "flex",
          padding: 10,
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <div>
          <button
            className="sidebarButton"
            onClick={() => setToggled(!toggled)}
          >
            <span className="materialSymbolsOutlined">Menu</span>
          </button>
        </div>
        <h1>Profile:</h1>
      </main>
      
      {/* Profile form */}
      <form onSubmit={handleSubmit} className="profileForm">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleChange} required />
        </label>

        <label>
          Username:
          <input type="text" name="username" value={formData.username} onChange={handleChange} required />
        </label>

        <label>
          Password:
          <input type="password" name="password"  value={formData.password} onChange={handleChange} required />
        </label>

        <label>
          Email:
          <input type="email" name="email" pattern="^[^\s@]+@[^\s@]+\.[^\s@]+$" value={formData.email} onChange={handleChange} required />
        </label>

        <label>
          Phone (up to 13 characters):
          <input type="tel" name="phone" maxLength="13" value={formData.phone} onChange={handleChange} required />
        </label>

        <label>
          Address:
          <textarea name="address" value={formData.address} onChange={handleChange} required />
        </label>

        <button type="submit">Submit</button>
      </form>
    </div>
  </>

    
  );
};

export default ProfileForm;