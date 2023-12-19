import React from 'react';
import 'react-native-gesture-handler';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {HomeScreen1} from './HomeScreen1';
import {HomeScreen2} from './HomeScreen2';
const Drawer = createDrawerNavigator();

export default function MainHomeScreen() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="HomeScreen1" component={HomeScreen1} />
      <Drawer.Screen name="HomeScreen2" component={HomeScreen2} />
    </Drawer.Navigator>
  );
}
