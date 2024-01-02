import SimpleRNN from '../components/SimpleRNN';
import { Route } from 'react-router-dom';

export const SimpleRNNPATH="simplernn"

const SimpleRNNRoutes = () => {
  return <Route path={SimpleRNNPATH} Component={SimpleRNN} />;
};

export default SimpleRNNRoutes;
