import Combinatorics from '../components/Combinatorics';
import { Route } from 'react-router-dom';

export const COMBINATORICS_PATH="/combinatorics";

const CombinatoricsRoutes = () => {
  return <Route path={COMBINATORICS_PATH} Component={Combinatorics} />;
};

export default CombinatoricsRoutes;
