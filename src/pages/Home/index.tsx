import Eu from "../../Images/Minha foto.jpeg";
import style from "./styles.module.css";
import {BsGithub, BsLinkedin, BsWhatsapp} from 'react-icons/bs'

export default function Home() {

  return (
    <div className={style.Home}>
      <header>
        <div className={style.animationContainer}>
          <h1 className={style.animatedText}>
            I AM DEV FULLSTACK!!!
          </h1>
        </div>
        <div className={style.name}>
          <img src={Eu} alt="" />
          <h2>Ian Pedro Borges Da Silva</h2>
          <div>
            <ul>
              <li><a href="https://github.com/IanPedroBorges" target="_blank"><BsGithub/></a></li>
              <li><a href="https://www.linkedin.com/in/ian-borges/" target="_blank"><BsLinkedin/></a></li>
              <li><a href="https://web.whatsapp.com/send?phone=+5533987157144" target="_blank"><BsWhatsapp/></a></li>
            </ul>
          </div>
        </div>
      </header>
      <section>
        Olá! Meu nome é Ian Pedro Borges, e sou natural de Minas Gerais.
        Atualmente, estou empolgado em estar estudando na Trybe, uma instituição
        renomada que tem me proporcionado um aprendizado profundo em
        desenvolvimento web. Minha jornada na área de programação começou há
        dois ano e meio, quando decidi me dedicar de forma autodidata para
        aprender os fundamentos e conceitos básicos da programação web. Agora,
        com a oportunidade de estudar na Trybe, estou aprimorando minhas
        habilidades e expandindo meu conhecimento em tecnologias modernas e
        práticas ágeis de desenvolvimento. Estou entusiasmado em dar o próximo
        passo na minha carreira e ingressar no mercado de trabalho como
        programador web. Durante minha trajetória de estudos, desenvolvi
        projetos pessoais e participei de desafios que me permitiram aplicar o
        que aprendi e aprofundar minha compreensão em diferentes áreas da
        programação. Busco meu primeiro emprego em uma empresa inovadora, onde
        possa contribuir com minhas habilidades técnicas e minha sede de
        aprender e crescer como profissional. Tenho paixão pela resolução de
        problemas e estou sempre em busca de soluções criativas e eficientes.
        Além da programação, sou uma pessoa comprometida, comunicativa e adoro
        trabalhar em equipe. Valorizo o compartilhamento de conhecimentos e a
        troca de ideias para atingir os melhores resultados. Estou ansioso para
        enfrentar novos desafios e fazer parte de um ambiente que promova o
        desenvolvimento profissional e pessoal. Se você procura um profissional
        dedicado, apaixonado por tecnologia e pronto para fazer a diferença,
        estou aqui para contribuir!
      </section>
    </div>
  );
}
