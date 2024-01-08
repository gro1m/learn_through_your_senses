import React from 'react';
import AboutMe from '../components/AboutMe';

import { Route } from 'react-router-dom';

export const ABOUTME_PATH="/aboutMe"
const AboutMeRoutes = () : React.ReactElement => {
  return <Route path={ABOUTME_PATH} element={<AboutMe />} />
};

export default AboutMeRoutes;
