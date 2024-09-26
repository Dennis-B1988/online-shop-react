import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { createRoot } from "react-dom/client";
import Navbar from "./components/navbar";

const element = <Navbar />;
const root = createRoot(document.getElementById("root"));
root.render(element);
