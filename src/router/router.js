import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, Akun, Jadwal} from '../screen';
import { BottomTabNavigation } from '../component'

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator tabBar={props => <BottomTabNavigation {...props} />}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Akun" component={Akun} />
      <Tab.Screen name="Jadwal" component={Jadwal} />
    </Tab.Navigator>
  );
};

const Router = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Futsal" component={MainApp} options={{headerShown: false}} />
    </Stack.Navigator>
  );
};

export default Router;
