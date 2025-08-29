import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import "./App.css";

export default function App() {
  return (
    <Router basename={__XR_ENV_BASE__}>
      <Routes>
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/" element={<FirstPage />} />
      </Routes>
    </Router>
  );
}
