import styles from "./styles.module.scss";

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.optionWrapper}>
        <p>Suma</p>
        <p>Resta</p>
        <p>Producto</p>
        <p>Diferencial</p>
      </div>
    </header>
  );
};

export default Header;
