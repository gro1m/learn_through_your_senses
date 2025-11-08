import "./App.css";
import { MathJaxContext } from "better-react-mathjax";
import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/Navbar";
import AppRoutes from "./AppRoutes"; // <-- your consolidated routes

function App() {
  return (
    <MathJaxContext>
      <Router>
        <Navbar />
        <AppRoutes /> {/* All routes are now handled inside AppRoutes */}
      </Router>
    </MathJaxContext>
  );
}

export default App;
