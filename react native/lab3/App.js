import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { FaBeer } from 'react-icons/fa';
import { TabBarIcon } from 'react-native-vector-icons/MaterialCommunityIcons';
import Profile from './components/Profile';
import Movies from './components/Movies';
import Details from './components/Details';
import FormFormik from './components/Login'
const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();
import Todo from './components/Todo/Todo';

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
      <Tab.Screen
          name="Login"
          component={FormFormik}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="login"
                color={'blue'}
                size={40}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Todo"
          component={Todo}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="todo"
                color={'blue'}
                size={40}
              />
            ),
          }}
        />
        <Tab.Screen
          name="My Profile"
          component={Profile}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="account"
                color={'blue'}
                size={40}
              />
            ),
          }}
        />
        <Tab.Screen
          name="Movies"
          component={MoviesStackScreen}
          options={{
            tabBarLabel: '',
            tabBarIcon: () => (
              <MaterialCommunityIcons
                name="account"
                color={'blue'}
                size={40}
              />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

// Stack Navigator for Movies tab
function MoviesStackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Movies"
        component={Movies}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="Details" component={Details} />
    </Stack.Navigator>
  );
}