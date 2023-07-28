import { NavLink } from "react-router-dom";
import style from './styles.module.css';
import { MdPersonPin } from 'react-icons/md';
import { IoBookSharp, IoConstructSharp } from 'react-icons/io5'
export default function Header() {
  return (
    <header className={ style.Header }>
        <nav className={ style.Navlink }>
            <NavLink to='/'>Sobre <MdPersonPin /></NavLink>
            <NavLink to='/Hability'>Habilidades <IoBookSharp /></NavLink>
            <NavLink to='/Projects'>Projetos<IoConstructSharp/></NavLink>
        </nav>
    </header>
  )
}
