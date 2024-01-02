import AboutMe from '../components/AboutMe';

import { Route } from 'react-router-dom';

export const ABOUTME_PATH="/aboutMe"
const AboutMeRoutes = () => {
  return <Route path={ABOUTME_PATH} Component={AboutMe} />
};

export default AboutMeRoutes;
