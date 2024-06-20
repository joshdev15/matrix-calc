import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainProvider from "./contexts/MainProvider";
import Home from "./page/Home";
import Info from "./page/Info";
import "./index.css";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/info",
      element: <Info />,
    },
  ],
  {
    basename: "/",
  },
);

const App = () => {
  return (
    <MainProvider>
      <RouterProvider router={router} />
    </MainProvider>
  );
};

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
