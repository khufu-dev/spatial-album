import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FirstPage from "./FirstPage";
import SecondPage from "./SecondPage";
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

export default function App() {
  return (
    <Router basename={__XR_ENV_BASE__}>
      <Routes>
        <Route path="/second-page" element={<SecondPage />} />
        <Route path="/" element={<FirstPage />}
        />
      </Routes>
    </Router>
  )
}
