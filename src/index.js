import React, {createContext} from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase";
import "firebase/firestore";

import "./index.css";

const Context = createContext(null);

firebase.initializeApp({
  apiKey: "AIzaSyBTSGUAmxNbloRw_ZYLqtuAXH5F0KI2Hd8",
  authDomain: "dentistry-34b88.firebaseapp.com",
  projectId: "dentistry-34b88",
  storageBucket: "dentistry-34b88.appspot.com",
  messagingSenderId: "663586226828",
  appId: "1:663586226828:web:d47ddeff404819b009b1a9",
  measurementId: "G-29WH8BGMD6",
});

const firestore=firebase.firestore()

ReactDOM.render(
  <Context.Provider value={{ firebase, firestore }}>
    <App />
  </Context.Provider>,
  document.getElementById("root")
);
