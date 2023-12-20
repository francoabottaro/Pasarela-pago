import { NavLink } from "react-router-dom";
import "../CSS/App.css";
import Navegation from "./Navegation";

const Header = () => {
  return (
    <header>
      <NavLink to="/" className={"link-icon icons-effect icons-header logo"}>
        {" "}
        <img src="./icon.svg" alt="Icon" id="img-icon" />
        <h2>
          Payment <span>Gateway</span>
        </h2>
      </NavLink>
      <Navegation />
    </header>
  );
};

export default Header;
