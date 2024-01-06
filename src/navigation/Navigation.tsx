import React, {useMemo} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {Text} from 'react-native';

import HomeNavigation from './HomeNavigation';
// import MyListNavigation from './MyListNavigation';
import SettingsNavigation from './SettingsNavigation'

const Tab = createBottomTabNavigator();

// Define a higher-order function for tabBarLabel
const createTabBarLabel =
  (label: string) =>
  ({focused}: {focused: boolean}) =>
    (
      // eslint-disable-next-line react-native/no-inline-styles
      <Text style={{color: focused ? 'white' :  'rgba(253, 169, 71, 1)'}}>{label}</Text>
    );

// Define a higher-order function for tabBarIcon
const createTabBarIcon =
  (name: string, size: number) =>
  ({focused}: {focused: boolean}) =>
    (
      <MaterialCommunityIcons
        name={name}
        color={focused ? 'white' :  'rgba(253, 169, 71, 1)'}
        size={size}
      />
    );

const Navigation = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={() => ({
          tabBarStyle: {
            height: 90,
            paddingHorizontal: 5,
            paddingTop: 0,
            backgroundColor: 'rgba(255, 81, 82, 1)',
            position: 'absolute',
            borderTopWidth: 0,
          },
          cardStyle: {backgroundColor: 'transparent'}, // Set the card background to transparent
          transparentCard: true, // Enable transparent card mode
        })}>
        <Tab.Screen
          name="HomeNavigation"
          component={HomeNavigation}
          options={{
            headerShown: false,
            tabBarLabel: useMemo(() => createTabBarLabel('Home'), []),
            tabBarIcon: useMemo(() => createTabBarIcon('home-outline', 30), []),
          }}
        />
        {/* <Tab.Screen
          name="MyListNavigation"
          component={MyListNavigation}
          options={{
            headerShown: false,
            tabBarLabel: useMemo(() => createTabBarLabel('MyList'), []),
            tabBarIcon: useMemo(() => createTabBarIcon('clipboard-file-outline', 30), []),
          }}
        /> */}
        <Tab.Screen
          name="SettingsNavigation"
          component={SettingsNavigation}
          options={{
            headerShown: false,
            tabBarLabel: useMemo(() => createTabBarLabel('Settings'), []),
            tabBarIcon: useMemo(() => createTabBarIcon('cog-outline', 30), []),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;
