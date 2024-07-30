import { Link } from "react-router-dom";
import NAV from "../Constant/SinglePage";

const Footer = () => {
  return (
    <footer class="footer">
      <div class="footer__header">
        <h3 class="footer__header-title">INTROSE-21CLC08</h3>
      </div>
      <div class="footer__body">
        <div class="footer__body-item">
          <h3 class="footer__heading">ABOUT US </h3>
          <ul class="footer__list">
            <li class="footer-item">
              <a href="" class="footer-item__link">
                The CodeCrafters
              </a>
            </li>
            <li class="footer-item">
              <a href="" class="footer-item__link">
                Group 02
              </a>
              <p className="footer-describe">
                Tran Nguyen Thanh Binh - Project manager, developer <br />
                Vo Quoc Binh - Developer<br />
                Dinh The Anh - Developer<br />
                Nguyen Mau Gia Bao - Developer<br />
                Bui Nguyen Tin - Developer, designer<br />
              </p>


            </li>
          </ul>

        </div>
        <div class="footer__body-item">
          <h3 class="footer__heading">FOLLOW US</h3>
          <ul class="footer__list">
            <li class="footer-item">
              <a href="" class="footer-item__link">
                <i class="footer-item__icon fa-brands fa-facebook"></i>
                Facebook
              </a>
            </li>
            <li class="footer-item">
              <a href="" class="footer-item__link">
                <i class="footer-item__icon fa-brands fa-github"></i>
                GitHub
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__body-item">
          <h3 class="footer__heading">SUPPORT</h3>
          <ul class="footer__list">
            <li class="footer-item">
              <a href="" class="footer-item__link">
                Get help
              </a>
            </li>
            <li class="footer-item">
              <a href="" class="footer-item__link">
                Guide to booking the court
              </a>
            </li>
          </ul>
        </div>
        <div class="footer__body-item">
          <h3 class="footer__heading">PRIVACY POLICY</h3>
          <ul class="footer__list">
            <li class="footer-item">
              <a href="" class="footer-item__link">
                Introduction
              </a>
            </li>
            <li class="footer-item">
              <a href="" class="footer-item__link">
                Rules
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="goto-owner">
        <div className="title-goto-owner">
          Go to Owner Zone
        </div>
        <Link to={NAV.OWNER_PAGE}>
          <button className="footer__wrap-item footer__wrap-btn">
            Owner
            <i className="fa-solid fa-right-to-bracket"></i>
          </button>
        </Link>
      </div>
      <div class="footer__bottom">
        <div class="grid">
          <p class="footer__text">2023 - Copyright belongs to BadmintonZone</p>
        </div>
      </div>

    </footer>
  )
};
export default Footer;