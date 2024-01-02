import Lstm from '../components/Lstm';
import { Route } from 'react-router-dom';

export const LSTM_PATH = "/lstm"

const LstmRoutes = () => {
  return <Route path={LSTM_PATH} Component={Lstm} />;
};

export default LstmRoutes;
