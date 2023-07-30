import logo from "../../images/MyLogo.jpg";
import gitHubIcon from '../../images/gitHubIcon.svg';
import LinkedinIcon from '../../images/LinkedinIcon.svg';
import whats from '../../images/whatsapp.png';

import style from './index.module.css';

export default function Footer() {
  return (
    <footer className={style.FooterContainer}>
      <div className={style.icon}>
        <img src={logo} alt="" />
      </div>
      <div className={ style.containerText }>
        <div className={style.info}>
          <ul>
            <li>+55 (33) 98715-7144</li>
            <li>ianpborges0@gmail.com</li>
          </ul>
        </div>
        <div className={style.iconsList}>
          <ul>
            <li>
              <img src={gitHubIcon} alt="" />
            </li>
            <li>
              <img src={LinkedinIcon} alt="" />
            </li>
            <li>
              <img style={{ backgroundColor: "#A7A7A7" }} src={whats} alt="" />
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
