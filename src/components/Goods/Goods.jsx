import { Count } from "../Count/Count";
import style from "./Goods.module.css";

export const Goods = ({ item }) => {
  return (
    <li className={style.item}>
      <img
        className={style.image}
        src="../../assets/img/burger_1.jpg"
        alt={item}
      />

      <div className={style.goods}>
        <h3 className={style.title}>{item}</h3>

        <p className={style.weight}>512г</p>

        <p className={style.price}>
          1279
          <span className={style.currency}>₽</span>
        </p>
      </div>

      <Count count={2} />
    </li>
  );
};
