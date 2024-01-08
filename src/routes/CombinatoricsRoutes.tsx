import React from 'react';
import Combinatorics from '../components/Combinatorics';
import { Route } from 'react-router-dom';

export const COMBINATORICS_PATH="/combinatorics";

const CombinatoricsRoutes = () : React.ReactElement => {
  return <Route path={COMBINATORICS_PATH} element={<Combinatorics />} />;
};

export default CombinatoricsRoutes;
