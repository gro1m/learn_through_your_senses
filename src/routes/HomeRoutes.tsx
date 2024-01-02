import Home from '../components/Home';
import { Route } from 'react-router-dom';

export const HOME_PATH="/"
const HomeRoutes = () => {
  return <Route path={HOME_PATH} Component={Home} />;
};

export default HomeRoutes;
