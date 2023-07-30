import { HabilityArray } from "../../utils/Habilitys";
import style from './styles.module.css';

export default function Hability() {
  return (
    <section className={style.hability}>
      <div className={style.text}>
        <h2>Minhas Hard Skills</h2>
      </div>
      <div className={style.cardContainer}>
        {HabilityArray.map((el) => (
          <div key={el.name} className={style.card}>
            <img src={el.image} alt="" />
          </div>
        ))}
      </div>
    </section>
  );
}
