import Header from "../components/Header";
import styles from "../styles/general.module.scss";

const Info = () => {
  return (
    <>
      <Header />
      <div className={styles.wrapper} id="wrapper">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div>
            <h2>Integrantes:</h2>
            <p>
              <strong>Genesis Forsay</strong> - 27.103.563
            </p>
            <p>
              <strong>Yunaikel Abreu</strong> - 27.669.183
            </p>
            <p>
              <strong>Joshua Mora</strong> - 20.791.550
            </p>
          </div>

          <div>
            <h2>Sección:</h2>
            <p>Altagracia - Informática</p>
            <p>
              <strong>AIN 30132</strong>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Info;
