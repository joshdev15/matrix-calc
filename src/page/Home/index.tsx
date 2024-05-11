import { useState } from "react";
import AppInput from "../../components/AppInput";
import styles from "./styles.module.scss";

const Home = () => {
  const [base, setBase] = useState(2);

  const getFormData = () => {
    const inputs = document.querySelectorAll("input");
    console.log("inputs", inputs);
  };

  return (
    <div className={styles.wrapper} id="wrapper">
      <h1 style={{ marginBottom: 10 }}>Suma</h1>
      <div style={{ marginBottom: 10 }}>
        <button className={styles.mr} onClick={() => setBase(2)}>
          Base 2
        </button>
        <button className={styles.mr} onClick={() => setBase(3)}>
          Base 3
        </button>
      </div>

      <div style={{ display: "flex" }}>
        <table style={{ marginRight: 20 }}>
          <tbody>
            {Array.from({ length: base }).map((_: any, indexOne: number) => (
              <tr key={`ArrA${indexOne}`}>
                {Array.from({ length: base }).map(
                  (_: any, indexTwo: number) => (
                    <td key={`ArrA${indexOne}-Item${indexTwo}`}>
                      <AppInput id={`ArrA${indexOne}-Item${indexTwo}`} />
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>

        <div className={styles.operator}>+</div>

        <table style={{ marginLeft: 20 }}>
          <tbody>
            {Array.from({ length: base }).map((_: any, indexOne: number) => (
              <tr key={`ArrB${indexOne}`}>
                {Array.from({ length: base }).map(
                  (_: any, indexTwo: number) => (
                    <td key={`ArrB${indexOne}-Item${indexTwo}`}>
                      <AppInput id={`ArrB${indexOne}-Item${indexTwo}`} />
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className={styles.mt}>
        <button className={styles.mr} onClick={getFormData}>
          Sumar
        </button>
      </div>
    </div>
  );
};

export default Home;
