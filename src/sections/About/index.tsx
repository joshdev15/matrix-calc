import { useState } from "react";
import AppInput from "../../components/AppInput";
import styles from "./styles.module.scss";

const Info = () => {
  const [base, setBase] = useState(2);
  const [finalResult, setResult] = useState<never[][]>();

  const getFormData = () => {
    // Obtener elementos visuales
    setResult(undefined);
    const inputs = document.querySelectorAll("input");

    // Limpieza del Arreglo A
    const orderedArrayA = Array.from({ length: base }).map((_) => []);
    const arrayA = Array.from(inputs).filter((element) =>
      element.id.includes("a-"),
    );

    arrayA.forEach((item) => {
      const id = item.id.split("-");
      const arrLevel = parseInt(id[1]);
      orderedArrayA[arrLevel].push(parseInt(item.value) as never);
    });

    // Limpieza del Arreglo B
    const orderedArrayB = Array.from({ length: base }).map((_) => []);
    const arrayB = Array.from(inputs).filter((element) =>
      element.id.includes("b-"),
    );

    arrayB.forEach((item) => {
      const id = item.id.split("-");
      const arrLevel = parseInt(id[1]);
      orderedArrayB[arrLevel].push(parseInt(item.value) as never);
    });

    // Calculando resultado
    const resultArray = Array.from({ length: base }).map((_) => []);
    orderedArrayA.forEach((i: any, aidx: number) => {
      i.forEach((num: any, bidx: number) => {
        resultArray[aidx][bidx] = (num + orderedArrayB[aidx][bidx]) as never;
      });
    });

    setResult(resultArray);
  };

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
          <p>Genesis Forsay - </p>
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
