import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

const app = <App></App>;
const root = createRoot(document.getElementById("root"));
root.render(app);
