import './App.css'
import { MathJaxContext } from 'better-react-mathjax';
import Index from './components/Index';
import AboutMe from './components/AboutMe';

import BuildComputerIntro from './components/BuildComputerIntro';
import Combinatorics from './components/Combinatorics';
import SimpleRNN from './components/SimpleRNN';
import Lstm from './components/Lstm';


function App() {

  return (
    <MathJaxContext>
      <Index />
      <AboutMe />
      <BuildComputerIntro />
      <Combinatorics />
      <SimpleRNN />
      <Lstm />
    </MathJaxContext>
  )
}

export default App
