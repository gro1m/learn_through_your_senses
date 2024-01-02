import React from 'react';
import Home from '../components/Home';
import { Route } from 'react-router-dom';

export const HOME_PATH = '/';
const HomeRoutes = (): React.ReactElement => {
  return <Route path={`${HOME_PATH}*`} element={<Home />} />;
};

export default HomeRoutes;
