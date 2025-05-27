import Sidebar from "./components/Sidebar/Sidebar";
import "./App.css";
import Searchbar from "./components/Header/Searchbar";
import Dashboard from "./components/Dashboard/Dashboard";
import Activity from "./components/Activity/Activity";
import Profile from "./components/Calender&Schedule/Profile";
import Calender from "./components/Calender&Schedule/Calender";
import Appointment from "./components/Calender&Schedule/Appointment";
import UpcomingSchedule from "./components/Calender&Schedule/UpcomingSchedule";

const App = () => {
  return (
    <div className="wrapper">
      <Sidebar />
      <div className="main">
        <div className="middle">
          <Searchbar />
          <Dashboard />
          <Activity />
        </div>
        <div className="right">
          <Profile />
          <Calender />
          <Appointment />
          <UpcomingSchedule />
        </div>
      </div>
    </div>
  );
};

export default App;
