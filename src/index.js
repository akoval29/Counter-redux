import React from "react";
import { createRoot } from "react-dom/client";

import { Layout } from "./js/layout";

import "./style/style.css";

const root = document.getElementById("app");

createRoot(root).render(<Layout />);
