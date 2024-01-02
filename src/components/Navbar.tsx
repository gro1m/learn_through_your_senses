import { Link } from 'react-router-dom';
import { HOME_PATH } from '../routes/HomeRoutes';
import { ABOUTME_PATH } from '../routes/AboutMeRoutes';
import { BUILDCOMPUTERINTRO_PATH } from '../routes/BuildComputerIntroRoutes';
import { COMBINATORICS_PATH } from '../routes/CombinatoricsRoutes';
import { LSTM_PATH } from '../routes/LstmRoutes';
import { SimpleRNNPATH } from '../routes/SimpleRNNRoutes';

const Navbar = () : JSX.Element => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={HOME_PATH}>Home</Link>
        </li>
        <li>
          <Link to={ABOUTME_PATH}>About</Link>
        </li>
        <li>
          <Link to={BUILDCOMPUTERINTRO_PATH}>Build Computer Intro</Link>
        </li>
        <li>
          <Link to={COMBINATORICS_PATH}>Combinatorics</Link>
        </li>
        <li>
          <Link to={SimpleRNNPATH}>Simple RNN</Link>
        </li>
        <li>
          <Link to={LSTM_PATH}>LSTM</Link>
        </li> 
      </ul>

      {/* Additional Navbar Content */}
    </nav>
  );
};

export default Navbar;
