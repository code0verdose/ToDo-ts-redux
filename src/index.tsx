import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./app/App";
import "./app/global/style/style.sass";
import "./app/global/style/btn.sass";
import { Provider } from "react-redux";
import store from "./store";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
