import { cartLogo, logo } from "../utils/constants";


const HeaderComponent = () => {
  return (
    <div className="header">
      <div className="logoContainer">
        <img className="logo"src={logo}/>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li><img className="cartLogo"src={cartLogo}/></li>
        </ul>
      </div>
    </div>
  );
};

export default HeaderComponent;