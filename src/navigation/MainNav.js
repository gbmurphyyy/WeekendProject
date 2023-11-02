import {} from 'react-native-gesture-handler';
import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import HomeScreen from '../screens/HomeScreen';
import SearchScreen from '../screens/SearchScreen';
import FavScreen from '../screens/FavScreen';

const Drawer = createDrawerNavigator();

function MainNav() {
  return (
    <NavigationContainer>
      <StatusBar hidden />
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen} />
        <Drawer.Screen name="Search" component={SearchScreen} />
        <Drawer.Screen name="Favorites" component={FavScreen} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}

export default MainNav;



