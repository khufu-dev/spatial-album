import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CoverFlow from "./CoverFlow.tsx";

export default function App() {
  return (
    <Router basename={__XR_ENV_BASE__}>
      <Routes>
        <Route path="/" element={<CoverFlow />} />
      </Routes>
    </Router>
  );
}
