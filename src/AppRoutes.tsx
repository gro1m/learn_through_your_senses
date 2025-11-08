// src/AppRoutes.tsx
import { Routes, Route } from "react-router-dom";

import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import BuildComputerIntro from "./components/BuildComputerIntro";
import Combinatorics from "./components/Combinatorics";
import SimpleRNN from "./components/SimpleRNN";
import Lstm from "./components/Lstm";
import DogBreedDemo from "./components/DogBreedDemo";

// Optional: define paths in a single place
export const HOME_PATH = "/";
export const ABOUTME_PATH = "/about_me";
export const BUILDCOMPUTERINTRO_PATH = "/build_computer_intro";
export const COMBINATORICS_PATH = "/combinatorics";
export const LSTM_PATH = "/lstm";
export const SimpleRNNPATH = "/simple_rnn";
export const DOGBREEDDEMO_PATH = "/dog_breed_demo";

export default function AppRoutes() {
  return (
    <Routes>
      <Route path={`${HOME_PATH}*`} element={<Home />} />
      <Route path={ABOUTME_PATH} element={<AboutMe />} />
      <Route path={BUILDCOMPUTERINTRO_PATH} element={<BuildComputerIntro />} />
      <Route path={COMBINATORICS_PATH} element={<Combinatorics />} />
      <Route path={LSTM_PATH} element={<Lstm />} />
      <Route path={SimpleRNNPATH} element={<SimpleRNN />} />
      <Route path={DOGBREEDDEMO_PATH} element={<DogBreedDemo />} />
    </Routes>
  );
}
