import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MainHomeScreen from './MainHomeScreen';
import MainProfileScreen from './MainProfileScreen';
import MainSettingScreen from './MainSettingScreen';

const TabBottom = createBottomTabNavigator();

export default function BottomTabs() {
  return (
    <TabBottom.Navigator>
      <TabBottom.Screen
        name="Home"
        options={{headerTitleAlign: 'center'}}
        component={MainHomeScreen}
      />
      <TabBottom.Screen
        name="Settings"
        options={{headerTitleAlign: 'center'}}
        component={MainSettingScreen}
      />
      <TabBottom.Screen
        name="Profile"
        options={{headerTitleAlign: 'center'}}
        component={MainProfileScreen}
      />
    </TabBottom.Navigator>
  );
}
