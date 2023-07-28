import { HabilityArray } from "../../utils/Habilitys";
import Cards from "../../components/Cards";
import style from "./style.module.css";

export default function Hability() {
  return (
    <div className={style.hability}>
      <div className={ style.text }>
        <h2>Habilidades</h2>
        <p>Conheça as habilidades que possuo na área de Desenvolvimento Web.</p>
      </div>
      <div className={ style.Card}>
        {HabilityArray.map((el) => (
          <Cards
            key={el.name}
            name={el.name}
            image={el.image}
            description={el.description}
          />
        ))}
      </div>
    </div>
  );
}
