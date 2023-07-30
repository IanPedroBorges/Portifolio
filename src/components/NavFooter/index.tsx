import style from './style.module.css';

export default function NavFooter() {
  return (
    <footer className={style.NavFooter}>
        <div className={style.barra}></div>
        <div className={style.main}>
            <nav>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Tech Stack</li>
                <li>Projects</li>
                <li>Contact</li>
            </ul>
            </nav>
            <div>
                <p>
                    Criado por <strong>  Ian Pedro Borges</strong> 
                </p>
            </div>
        </div>
    </footer>
  )
}
