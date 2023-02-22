import style from "./Count.module.css";
import { useState } from "react";

export const Count = (props) => {
  const [count, setCount] = useState(props.count);

  return (
    <div className={style.count}>
      <button
        className={style.minus}
        onClick={() => {
          if (count > 1) setCount(count - 1);
        }}
        disabled={count === 1}
      >
        -
      </button>
      <p className={style.amount}>{count}</p>
      <button className={style.plus} onClick={() => setCount(count + 1)}>
        +
      </button>
    </div>
  );
};
