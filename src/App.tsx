import "./App.css";
import { MathJaxContext } from 'better-react-mathjax';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomeRoutes from "./routes/HomeRoutes";
import AboutMeRoutes from "./routes/AboutMeRoutes";

import BuildComputerIntroRoutes from "./routes/BuildComputerIntroRoutes";
import CombinatoricsRoutes from "./routes/CombinatoricsRoutes";
import SimpleRNNRoutes from "./routes/SimpleRNNRoutes";
import LstmRoutes from "./routes/LstmRoutes";

function App() {
  return (
    <MathJaxContext>
      <Router>
        <Navbar />
        <Routes>
          <HomeRoutes />
          <AboutMeRoutes />
          <BuildComputerIntroRoutes />
          <CombinatoricsRoutes />
          <SimpleRNNRoutes />
          <LstmRoutes />
        </Routes>
      </Router>
    </MathJaxContext>
  );
}

export default App;
