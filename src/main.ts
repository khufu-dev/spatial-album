import { createElement, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import CoverFlow from "./CoverFlow.tsx";

createRoot(document.getElementById("root")!).render(
  createElement(StrictMode, null, createElement(CoverFlow)),
);
