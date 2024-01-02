import "./App.css";
import { MathJaxContext } from 'better-react-mathjax';
import { BrowserRouter as Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { Route } from 'react-router-dom';

import { HOME_PATH } from './routes/HomeRoutes';
import { ABOUTME_PATH } from './routes/AboutMeRoutes';
import { BUILDCOMPUTERINTRO_PATH } from './routes/BuildComputerIntroRoutes';
import { COMBINATORICS_PATH } from './routes/CombinatoricsRoutes';
import { LSTM_PATH } from './routes/LstmRoutes';
import { SimpleRNNPATH } from './routes/SimpleRNNRoutes';

import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import BuildComputerIntro from "./components/BuildComputerIntro";
import Combinatorics from "./components/Combinatorics";
import SimpleRNN from "./components/SimpleRNN";
import Lstm from "./components/Lstm";

// import HomeRoutes from "./routes/HomeRoutes";
// import AboutMeRoutes from "./routes/AboutMeRoutes";
// import BuildComputerIntroRoutes from "./routes/BuildComputerIntroRoutes";
// import CombinatoricsRoutes from "./routes/CombinatoricsRoutes";
// import SimpleRNNRoutes from "./routes/SimpleRNNRoutes";
// import LstmRoutes from "./routes/LstmRoutes";

function App() {
  return (
    <MathJaxContext>
      <Router>
        <Navbar />
        <Routes>
          {/* <HomeRoutes /> */}
          <Route path={`${HOME_PATH}*`} element={<Home />} />;

          <Route path={ABOUTME_PATH} element={<AboutMe />} />
          {/* <AboutMeRoutes /> */}

          <Route path={BUILDCOMPUTERINTRO_PATH} element={<BuildComputerIntro />} />;
          {/* <BuildComputerIntroRoutes /> */}

          <Route path={COMBINATORICS_PATH} element={<Combinatorics />} />;
          {/*  <CombinatoricsRoutes /> */} 
          <Route path={SimpleRNNPATH} element={<SimpleRNN />} />;
          {/* <SimpleRNNRoutes /> */}

          <Route path={LSTM_PATH} element={<Lstm />} />;
          {/* <LstmRoutes /> */}
        </Routes>
      </Router>
    </MathJaxContext>
  );
}

export default App;
