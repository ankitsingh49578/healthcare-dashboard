import "./Sidebar.css";
import { navigationLinksGeneral } from "../../data/navigationLinks";
import { navigationLinksTools } from "../../data/navigationLinks";
import settingIcon from "../../assets/navLinksIcons/setting.png";

const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <h2 className="logo">
          <span>Health</span>care.
        </h2>
        <nav className="nav-links">
          <span className="heading">General</span>
          <ul>
            {navigationLinksGeneral.map((item) => (
              <div key={item.id}>
                <a href="#" className="route">
                  <img src={item.icon} alt="" />
                  {item.name}
                </a>
              </div>
            ))}
          </ul>
        </nav>

        <nav className="nav-links">
          <span className="heading">Tools</span>
          <ul>
            {navigationLinksTools.map((item) => (
              <div key={item.id}>
                <a href="#" className="route">
                  <img src={item.icon} alt="" />
                  {item.name}
                </a>
              </div>
            ))}
          </ul>
        </nav>

        <a href="#" className="route setting">
          <img src={settingIcon} alt="" />
          Settings
        </a>
      </div>
    </>
  );
};

export default Sidebar;
