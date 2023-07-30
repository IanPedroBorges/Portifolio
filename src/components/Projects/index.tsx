import { ProjectArray } from "../../utils/ProjectArray";
import style from './styles.module.css';

import iconDeploy from '../../images/iconDeploy.svg';
import iconGithub from '../../images/iconGithubProject.svg';

export default function Projects() {
  return (
    <div className={style.ProjectContainer}>
      <div className={style.text}>
        <h2>Projects</h2>
      </div>
      <div className={style.ProjectCard}>
      {ProjectArray.map((el, index) => (
        <div key={index}>
          <img src={el.image} alt="" />
          <h3>{el.title}</h3>
          <p>{el.description}</p>
          <p>Tech Stack: {el.tech}</p>
          <ul>
            <li><a href={el.deploy}><img src={iconDeploy} alt="" />Ver Site</a></li>
            <li><a href={el.github}><img src={iconGithub} alt="" />Ver o Codigo</a></li>
          </ul>
        </div>
      ))}

      </div>
    </div>
  )
}
