import { Link } from "react-router-dom";
import NAV from "../Constant/SinglePage";
import { auth } from "../firebase";
import { signOut } from "firebase/auth";
import Logo from "../LandingPage/assets/img/logoBadmintonZone-02.png";
import { removeItem } from "localforage";
const Header = () => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      // If successful, navigate to the desired location (e.g., login page)
      window.location.href = "/login";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="header">
      <div className="header__item header__logo">
        <Link to={NAV.HOME_PAGE}>
          <img src={Logo} className="header__logo-img" alt="Logo" />
        </Link>
      </div>
      <div className="header__item header__wrap">
        <div className="header__wrap-box">
          <Link className="header__wrap-item" to={NAV.HOME_PAGE}>
            Home
          </Link>
          <Link className="header__wrap-item" to={NAV.BOOKING_PAGE}>
            Booking
          </Link>
          <Link className="header__wrap-item" to={NAV.NEWS_PAGE}>
            News
          </Link>
          <Link className="header__wrap-item" to={NAV.CONTACT_PAGE}>
            Contact
          </Link>
        </div>
        {/* <Link to={NAV.OWNER_PAGE}>
          <button className="header__wrap-item header__wrap-btn">
            Owner
            <i className="fa-solid fa-right-to-bracket"></i>
          </button>

        </Link> */}
        <Link>
          <button
            className="header__wrap-item header__wrap-btn"
            onClick={handleLogout}
          >
            Log out
            <i className="fa-solid fa-right-to-bracket"></i>
          </button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
