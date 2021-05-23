import React, {useEffect, useContext} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import ThemeContextProvider, {
  ThemeContext,
} from './app/components/ThemeManager';

import useTheme from './app/hooks/useTheme';

const Tab = createBottomTabNavigator();

import Home from './app/screens/Home/';
import Settings from './app/screens/Settings/';

const App = () => {
  return (
    <NavigationContainer>
      <ThemeContextProvider>
        <Index />
      </ThemeContextProvider>
    </NavigationContainer>
  );
};

const Index = () => {
  const [theme, readTheme] = useTheme();

  useEffect(() => {
    readTheme();
  });

  return (
    <Tab.Navigator
      tabBarOptions={{
        tabStyle: {
          backgroundColor: theme.primaryBackground,
        },
        labelStyle: {
          color: theme.text.subtitle,
        },
        labelPosition: 'beside-icon',
      }}>
      <Tab.Screen
        name="Home"
        options={{
          tabBarIcon: ({size, color}) => {
            return <MaterialIcons name="home" size={size} color={color} />;
          },
        }}
        component={Home}
      />
      <Tab.Screen
        name="Settings"
        options={{
          tabBarIcon: ({size, color}) => {
            return <MaterialIcons name="settings" size={size} color={color} />;
          },
        }}
        component={Settings}
      />
    </Tab.Navigator>
  );
};

export default App;
