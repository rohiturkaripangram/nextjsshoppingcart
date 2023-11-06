'use client'
import React from 'react';
import { Provider } from 'react-redux';
import appStore from './Store';

const AppProvider = ({ children }) => {
  return (
    <Provider store={appStore}>
      {children}
    </Provider>
  );
}

export default AppProvider;
