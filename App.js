<<<<<<< Updated upstream
import {} from 'react-native-gesture-handler';
import React from 'react';
import {} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SearchScreen from './src/screens/SearchScreen';
import FavScreen from './src/screens/FavScreen';
import HomeScreen from './src/screens/HomeScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

function TabNav() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
    }}>
    <Tab.Screen name="Home" component={HomeScreen} />
    <Tab.Screen name="Search" component={SearchScreen} />
    <Tab.Screen name="Favorite" component={FavScreen} />
  </Tab.Navigator>
  );
}

function DrawerNav() {
  return (
      <Drawer.Navigator screenOptions={{headerShown: false}}
      initialRouteName="TabNav">
        <Drawer.Screen name="TabNav" component={TabNav} />
        <Drawer.Screen name="Search" component={SearchScreen} />
        <Drawer.Screen name="Favorites" component={FavScreen} />
      </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={DrawerNav}/>
      </Stack.Navigator>
    </NavigationContainer>
  )
}
=======
// App.js
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Provider} from 'react-redux';
import {store} from './src/store';
import StackNav from './src/navigation/StackNav';
import {UserProvider} from './src/context/UserContext';

function App() {
  return (
    <UserProvider>
      <NavigationContainer>
        <Provider store={store}>
          <StackNav />
        </Provider>
      </NavigationContainer>
    </UserProvider>
  );
}
>>>>>>> Stashed changes

export default App;

// import {NavigationContainer} from '@react-navigation/native';
// import React from 'react';
// import {} from 'react-native';
// import StackNav from './src/navigation/StackNav';
// import {UserContextProvider} from './src/contexts/UserContext'; //exported to use it around the entire child components
// import store from './src/store';
// import {Provider} from 'react-redux';

// function App() {
//   return (
//     <UserContextProvider>
//       <Provider store={store}>
//         <NavigationContainer>
//           <StackNav />
//         </NavigationContainer>
//       </Provider>
//     </UserContextProvider>
//   );
// }

// export default App;
