import React from 'react';
import ProfileScreen1 from './ProfileScreen1';
import ProfileScreen2 from './ProfileScreen2';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
const TabTop = createMaterialTopTabNavigator();

export default function MainProfileScreen() {
  return (
    <TabTop.Navigator>
      <TabTop.Screen name="ProfileScreen1" component={ProfileScreen1} />
      <TabTop.Screen name="ProfileScreen2" component={ProfileScreen2} />
    </TabTop.Navigator>
  );
}
