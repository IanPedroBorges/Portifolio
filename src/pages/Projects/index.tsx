import { useState } from "react"
import style from './styles.module.css';

export default function Projects() {
  const [projects, SetProjects] = useState(1);
  return (
    <div className={ style.mainProject }>
      <h1>Meus Projetos</h1>
      <p>Confira alguns dos projetos que desenvolvi na área de Desenvolvimento Web</p>
      <div className={ style.listBtn }>
        <ul>
          <li><button onClick={ () => SetProjects(1) }>Todos</button></li>
          <li><button onClick={ () => SetProjects(2) }>Estudos</button></li>
          <li><button onClick={ () => SetProjects(3) }>Profissionais</button></li>
        </ul>
      </div>
      <section>
        {projects === 1 && (
          <div>
            All Project
          </div>
        )}
        {projects === 2 && (
          <div>
            Projetos de Estudo
          </div>
        )}
        {projects === 3 && (
          <div>
            Projetos Profissionais
          </div>
        )}
      </section>
    </div>
  )
}
