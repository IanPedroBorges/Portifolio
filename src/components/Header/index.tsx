import logo from '../../images/MyLogo.jpg';
import gitHubIcon from '../../images/gitHubIcon.svg';
import LinkedinIcon from '../../images/LinkedinIcon.svg';
import whats from '../../images/whatsapp.png';
import style from './styles.module.css';

export default function Header() {
  return (
    <header className={ style.Header}>
        <div className={ style.Logo }>
            <img src={logo} alt="" />
        </div>
        <nav className={ style.NavLink }>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Tech Stack</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            <div className={ style.Icons }>
                <ul>
                    <li><img src={gitHubIcon} alt="" /></li>
                    <li><img src={LinkedinIcon} alt="" /></li>
                    <li><img style={ { backgroundColor: '#A7A7A7' } } src={whats} alt="" /></li>
                </ul>
            </div>
        </nav>
    </header>
  )
}
