import "./HeaderStyle.css";
import logo from "../../assets/img/logo.png";
import { GoThreeBars } from "react-icons/go";
import { FaSearch } from "react-icons/fa";
import { FaRegLightbulb } from "react-icons/fa";
import { BsFullscreen } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { IoNotificationsOutline } from "react-icons/io5";
import { FiMessageSquare } from "react-icons/fi";
import { FiLogOut } from "react-icons/fi";
import { Link } from "react-router-dom";


function Header() {
  return (
    <header id="header">
      <div id="header-wrapper">
        <div id="logo-sidebar">
          <div id="logo">
            <img src={logo} alt="text" />
          </div>
          <div id="sidebar">
            <button className="sidebar-icon">
              <GoThreeBars />
            </button>
          </div>
        </div>
        <div id="search-bar">
          <FaSearch className="search-icon" />
          <input
            type="text"
            placeholder="Search here"
            className="search-input"
          />
        </div>
        <div id="btns-login">
          <button className="header-btn">
            <BsFullscreen />
          </button>
          <button className="header-btn">FLAG</button>
          <button className="header-btn">
            <AiOutlineStar />
          </button>
          <button className="header-btn">
            <IoNotificationsOutline />
          </button>
          <button className="header-btn">
            <FaRegLightbulb />
          </button>
          <button className="header-btn">
            <FiMessageSquare />
          </button>
          <button className="login-btn">
            <FiLogOut /> 
            <Link to="/login">Log out</Link>
          </button>
        </div>
      </div>
    </header>
  );
}
export default Header;
