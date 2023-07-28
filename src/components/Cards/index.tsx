import { Cards } from "../../types";
import style from './style.module.css';

export default function Cards({ name, image, description }: Cards) {
  return (
    <div className={style.Cards}>
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>{description}</p>
    </div>
  );
}
