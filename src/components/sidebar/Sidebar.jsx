import "./SidebarStyle.css";
import userImg from "../../assets/img/user-Img.png";
// import { FiSettings }  from "react-icons/fi";
import { FiHome } from "react-icons/fi";
import { CgScreenMirror } from "react-icons/cg";
import { AiOutlineLayout } from "react-icons/ai";

function Sidebar() {
  return (
    <div id="sidenav">
      <div id="user-photo">
        <div className="user-img-box">
          <img src={userImg} alt="userImg" className="user-img" />
          {/* <a href="/"><FiSettings /></a> */}
        </div>
        <div className="user-info">
          <div className="user-name">
            <h6>Emay Walter</h6>
            <p>Human Resources Department</p>
          </div>
          <div className="stats">
            <div className="flw">
              <p className="bigger">19.8k</p>
              <p className="smaller">Follow</p>
            </div>
            <div className="exp">
              <p className="bigger">2 year</p>
              <p className="smaller">Experince</p>
            </div>
            <div className="flwr">
              <p className="bigger">95.2k</p>
              <p className="smaller">Follower</p>
            </div>
          </div>
        </div>
      </div>
      <div className="nav-cont">
        <div className="general">
          <div className="heading">
            <h6>General</h6>
          </div>
          <div className="heading-cont">
            <a href="/">
              <FiHome className="heading-icon" />
              Dashbord
            </a>
            <a href="/">
              <CgScreenMirror className="heading-icon" />
              Widgets
            </a>
            <a href="/">
              <AiOutlineLayout className="heading-icon" />
              Page layout
            </a>
          </div>
        </div>
        <div className="general">
          <div className="heading">
            <h6>General</h6>
          </div>
          <div className="heading-cont">
            <a href="/">
              <FiHome className="heading-icon" />
              Dashbord
            </a>
            <a href="/">
              <CgScreenMirror className="heading-icon" />
              Widgets
            </a>
            <a href="/">
              <AiOutlineLayout className="heading-icon" />
              Page layout
            </a>
          </div>
        </div>
        <div className="general">
          <div className="heading">
            <h6>General</h6>
          </div>
          <div className="heading-cont">
            <a href="/">
              <FiHome className="heading-icon" />
              Dashbord
            </a>
            <a href="/">
              <CgScreenMirror className="heading-icon" />
              Widgets
            </a>
            <a href="/">
              <AiOutlineLayout className="heading-icon" />
              Page layout
            </a>
          </div>
        </div>
        <div className="general">
          <div className="heading">
            <h6>General</h6>
          </div>
          <div className="heading-cont">
            <a href="/">
              <FiHome className="heading-icon" />
              Dashbord
            </a>
            <a href="/">
              <CgScreenMirror className="heading-icon" />
              Widgets
            </a>
            <a href="/">
              <AiOutlineLayout className="heading-icon" />
              Page layout
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
