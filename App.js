import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme
} from 'react-native';
import { Provider } from 'react-redux'
import {store} from './src/redux/store'
import AppNavigation from './src/navigation';

const App = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppNavigation></AppNavigation>
    </Provider>
  );
};

export default App;
