import React from 'react';
import BuildComputerIntro from '../components/BuildComputerIntro';
import { Route } from 'react-router-dom';

export const BUILDCOMPUTERINTRO_PATH="/buildComputerIntro";

const BuildComputerIntroRoutes = () : React.ReactElement => {
  return <Route path={BUILDCOMPUTERINTRO_PATH} element={<BuildComputerIntro />} />;
};

export default BuildComputerIntroRoutes;
