import React from 'react';
import Lstm from '../components/Lstm';
import { Route } from 'react-router-dom';

export const LSTM_PATH = "/lstm"

const LstmRoutes = () : React.ReactElement => {
  return <Route path={LSTM_PATH} element={<Lstm />} />
};

export default LstmRoutes;
