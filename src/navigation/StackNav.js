import React, {useEffect, useState} from 'react';
import {Text} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import SignIn from '../screens/SignIn';
import SignUp from '../screens/SignUp';
import ForgotPassword from '../screens/ForgotPassword';
import Home from '../screens/Home';
import Cart from '../screens/Cart';

const Stack = createNativeStackNavigator();

const StackNav = () => {
  const user = useSelector(state => state.user);
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  useEffect(() => {
    setIsUserLoggedIn(
      user?.data?.accessToken &&
        typeof user?.data?.accessToken === 'string' &&
        user?.data?.accessToken.length > 50
        ? true
        : false,
    );
  }, [user]);

  const navigation = useNavigation();

  const getAuthStack = () => {
    return (
      <Stack.Group>
        <Stack.Screen
          name="SignIn"
          component={SignIn}
          onPress={() => {
            navigation.navigate('Home');
          }}
        />
        <Stack.Screen name="SignUp" component={SignUp} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Group>
    );
  };

  const getMainStack = () => {
    return (
      <Stack.Group screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Cart" component={Cart} />
      </Stack.Group>
    );
  };

  return (
    <Stack.Navigator>
      {isUserLoggedIn ? getMainStack() : getAuthStack()}
    </Stack.Navigator>
  );
};
export default StackNav;

// import React, {useState, useEffect, useContext} from 'react';
// import {} from 'react-native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack';
// import LoginScreen from '../screens/SignIn';
// import DashboardScreen from '../screens/Dashboard';
// import SignupScreen from '../screens/SignUp';
// import ApiScreen from '../screens/ApiScreen';
// import ItemsCRUD from '../screens/itemsCRUD';
// import {useSelector} from 'react-redux';
// import UserContext from '../context/UserContext';
// const Stack = createNativeStackNavigator();

// const Navigator = () => {
//   // const {user} = useContext(UserContext);
//   const user = useSelector(state => state.user);
//   useEffect(() => {
//     setIsUserLoggedIn(
//       user?.data?.accessToken &&
//         typeof user?.data?.accessToken === 'string' &&
//         user?.data?.accessToken.length > 50
//         ? true
//         : false,
//     );
//   }, [user]);

//   const [isUserLoggedIn, setIsUserLoggedIn] = useState(user?.data?.id);

//   const authStack = () => {
//     return (
//       <Stack.Group>
//         <Stack.Screen name="LoginScreen" component={LoginScreen}></Stack.Screen>
//         <Stack.Screen
//           name="SignupScreen"
//           component={SignupScreen}></Stack.Screen>
//       </Stack.Group>
//     );
//   };

//   const mainStack = () => {
//     return (
//       <Stack.Group>
//         <Stack.Screen
//           name="DashboardScreen"
//           component={DashboardScreen}></Stack.Screen>
//         <Stack.Screen name="ApiScreen" component={ApiScreen}></Stack.Screen>

//         <Stack.Screen name="ItemsCRUD" component={ItemsCRUD}></Stack.Screen>
//       </Stack.Group>
//     );
//   };

//   return (
//     <Stack.Navigator>
//       {isUserLoggedIn ? mainStack() : authStack()}
//     </Stack.Navigator>
//   );
// };

// export default Navigator;
