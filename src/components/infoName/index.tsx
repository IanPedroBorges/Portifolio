import eu from '../../images/eu.png';
import style from './styles.module.css';
export default function InfoName() {
    return (
    <section className={style.main}>
        <article>
            <h1>
                Ola 👋,
                Meu Nome é<br/><strong>Ian Pedro Borges  </strong>
                Eu sou <strong>Desenvolvedor Full Stack</strong>
            </h1>
        </article>
        <aside className={style.aside}>
            <img src={eu} alt="" />
        </aside>
    </section>
  )
}
