import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import Router from './router/router';


function App() {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
}

export default App;