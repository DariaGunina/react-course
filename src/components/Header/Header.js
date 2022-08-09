import React from "react";
import icon from "../../assets/icon.png";

import styles from "./Header.module.css";

export const Header = ({title, subtitle}) => {
  const [count, setCount] = React.useState(1);

  return (
    <div className={styles.container}>
        <div className={styles.header}>
            <h1 className={styles.title}>{title}</h1>
            <p className={styles.subtitle}>{subtitle}</p>
        </div>
        <div className={styles.counter}>
            <div className={styles.content}>
                <div className={styles.count}>{count}</div>
                <div onClick={() => setCount(count + 1)}>
                    <img src={icon} className={styles.icon} alt="icon"/>
                </div>
            </div>
            <p className={styles.name}>Click me!</p>
        </div>
    </div>
  );
}