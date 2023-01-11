import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const div = document.getElementById("students");
const root = ReactDOM.createRoot(div);

root.render(<App />);

/*
const root = new App();

root.render();
*/