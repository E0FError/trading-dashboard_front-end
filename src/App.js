// src/App.js

import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import store from "./store.js";
import Header from "./components/Header/index.jsx";
import TradesPage from "./components/TradesPage/TradesPage";
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <TradesPage />
        <div style={{ padding: "20px" }}>
          <p>
            Welcome to your new trading algorithm dashboard! <br />
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </div>
      </div>
    </Provider>
  );
}

export default App;
