import React from 'react';
import SimpleRNN from '../components/SimpleRNN';
import { Route } from 'react-router-dom';

export const SimpleRNNPATH="simplernn"

const SimpleRNNRoutes = () : React.ReactElement => {
  return <Route path={SimpleRNNPATH} element={<SimpleRNN />} />;
};

export default SimpleRNNRoutes;
