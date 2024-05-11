import React from "react";
import ReactDOM from "react-dom/client";
import MainProvider from "./contexts/MainProvider";
import Home from "./page/Home";
import "./index.css";
import Header from "./components/Header";

function App() {
  return (
    <MainProvider>
      <Header />
      <Home />
    </MainProvider>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
