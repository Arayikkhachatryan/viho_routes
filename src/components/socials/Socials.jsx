import "./Socials.css";
import { FiLinkedin } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Socials = () => {
  const location = useLocation().pathname;
  return (
    <div id="socials-title">
      <div className="dashes">
        <h5>signup with</h5>
      </div>
      <div className="socials-icons">
        <ul className="social-ul">
          <li>
            <FiLinkedin />
          </li>
          <li>
            <FiTwitter />
          </li>
          <li>
            <FiFacebook />
          </li>
          <li>
            <FiInstagram />
          </li>
        </ul>
      </div>
      {location === "/" ? (
        <p>
          {" "}
          Already have an account?{" "}
          <span>
            <Link to={"/login"}>Sign in</Link>
          </span>
        </p>
      ) : (
        <p>
          Don't have account?
          <span>
             <Link to={"/"}>Create account</Link>
          </span>
        </p>
      )}
    </div>
  );
};

export default Socials;
