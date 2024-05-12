import styles from "./styles.module.scss";

const Info = () => {
  return (
    <div className={styles.wrapper} id="wrapper">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <h3>Integrantes:</h3>
          <p>Joshua Mora - 20.791.550</p>
          <p>Yunaikel Abreu - </p>
          <p>Genesis Forsay - 27.103.563</p>
        </div>

        <div>
          <h3>Sección:</h3>
          <p>AIN 30132</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
import styles from "./styles.module.scss";

const Info = () => {
  return (
    <div className={styles.wrapper} id="wrapper">
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <div>
          <h3>Integrantes:</h3>
          <p>Joshua Mora - 20.791.550</p>
          <p>Yunaikel Abreu - </p>
          <p>Genesis Forsay - 27.103.563</p>
        </div>

        <div>
          <h3>Sección:</h3>
          <p>AIN 30132</p>
        </div>
      </div>
    </div>
  );
};

export default Info;
