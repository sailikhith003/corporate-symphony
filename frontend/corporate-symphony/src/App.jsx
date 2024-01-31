import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from "./pages/Home";
import Aboutus from "./pages/Aboutus";
import Login from "./pages/Login";
import Register from "./pages/Register";
import DashBoard from "./pages/DashBoard";
import Eventlist from "./pages/EventList";
import MyEvents from "./pages/MyEvents";
import PastEvents from "./pages/PastEvents";
import ProfileForm from "./pages/ProfileForm";
import ProfileView from "./pages/ProfileView";
import { useState } from "react";
import AdminDash from './pages/AdminDash/DashBoard'
import AddEvent from "./pages/AdminDash/AddEvent";
import Academy from "./pages/AdminDash/Academy";
import CreateEvent from "./pages/AdminDash/CreateEvent";
import Event from "./pages/AdminDash/Event";
import Profile from "./pages/AdminDash/Profile";
import Users from "./pages/AdminDash/Users";
import UsersEdit from "./pages/AdminDash/UsersEdit";

function App() {
  
    const [submittedData, setSubmittedData] = useState(null);
  
    const handleFormSubmit = (data) => {
      setSubmittedData(data);
    };
  
    const handleProfileEdit = () => {
 
      console.log('Editing profile...');
    };
  return ( 
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/aboutus" element={<Aboutus/>}/>
        <Route path="/login-signup" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
        <Route path="/dashboard" element={<DashBoard/>}/>
        <Route path="/eventlist" element={<Eventlist/>}/>
        <Route path="/myevents" element={<MyEvents/>}/>
        <Route path="/pastevents" element={<PastEvents/>}/>
        <Route
          path="/profile"
          element={
            submittedData ? (
              <ProfileView profileData={submittedData} onEdit={handleProfileEdit} />
            ) : (
              <ProfileForm onSubmit={handleFormSubmit} />
            )
          }
        />
        <Route path="/dashboard/admin" element={<AdminDash />}/>  
        <Route
          path="/dashboard/admin/create-academy"
          element={<CreateEvent />}
        />
        <Route path="/dashboard/admin/add-course" element={<AddEvent />} />
        <Route path="/dashboard/admin/users" element={<Users />} />
        <Route
          path="/dashboard/admin/users/edit"
          element={<UsersEdit />}
        />
        <Route path="/dashboard/admin/profile" element={<Profile />} />
        <Route path="/dashboard/admin/academies" element={<Academy />} />
        <Route path="/dashboard/admin/courses" element={<Event />} />
      </Routes>
    </Router>
    </>
   );
}

export default App;