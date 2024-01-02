import BuildComputerIntro from '../components/BuildComputerIntro';
import { Route } from 'react-router-dom';

export const BUILDCOMPUTERINTRO_PATH="/buildComputerIntro";

const BuildComputerIntroRoutes = () => {
  return <Route path={BUILDCOMPUTERINTRO_PATH} Component={BuildComputerIntro} />;
};

export default BuildComputerIntroRoutes;
