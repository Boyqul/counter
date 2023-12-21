import styles from "./counter.module.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  //IN plus-btn for functions
  const handlerPlus = () => {
    setCount(count + 1);
  };

  //IN minus-btn for functions
  const handlerMinus = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };
  return (
    <>
      <h1 className={styles["title"]}> Counter</h1>

      <div className={styles["container"]}>
        <button className={styles["plus-btn"]} onClick={handlerPlus}>
          1-ortirish
        </button>
        <h1 className={styles["titles"]}>{count}</h1>
        <button className={styles["minus-btn"]} onClick={handlerMinus}>
          1-kamaytirish
        </button>
      </div>
    </>
  );
}

export default Counter;
