import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ReactLenis } from "lenis/react";
// import { Cursor } from "./components/cursor/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ReactLenis root>
      {/* <Cursor /> */}
      <App />
    </ReactLenis>
  </React.StrictMode>
);
