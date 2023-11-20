import {useState, useContext} from 'react';
import {
  View,
  Text,
  TextInput,
  Button,
  ActivityIndicator,
  StyleSheet,
  Image,
} from 'react-native';
// import {EventRegister} from 'react-native-event-listeners';
import {useDispatch, useSelector} from 'react-redux';
import {ApiHelper} from '../helper';
import {userActions} from '../features/userSlice';
import {kApiUserLogin} from '../config/WebService';
import logo from '../images/logo.png';
import UserButton from '../components/UserButton';
import {useNavigation} from '@react-navigation/native';
import {useAuth} from '../hooks/UseAuth';
import {loginRequest} from '../features/authReducer';

const {request, success, failure} = userActions;

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {user} = useAuth();

  const dispatch = useDispatch();
  const auth = useSelector(state => state.auth);

  const handleLogin = () => {
    if (email && password) {
      dispatch(request({email, password}));

      ApiHelper.post(kApiUserLogin, {email, password})
        .then(response => {
          dispatch(success(response.data));
          setUser(true);
          navigation.navigate('Home');
        })
        .catch(error => {
          dispatch(failure(error.message));
        });
    } else {
      setEmail('');
      setPassword('');
    }
  };

  // const handleLogin = async () => {
  //   try {
  //     await dispatch(request({email, password}));

  //     ApiHelper.post(kApiUserLogin, {email, password}).then(response => {
  //       dispatch(success(response.data));
  //       setUser(true);
  //       navigation.navigate('Home');
  //     });
  //   } catch (error) {
  //     dispatch(failure(error));
  //   }

  const navigation = useNavigation();

  const forgotPressed = () => {
    navigation.navigate('ForgotPassword');
  };

  const signUpPressed = () => {
    navigation.navigate('SignUp');
  };

  return (
    <View style={styles.root}>
      <Image source={logo} style={styles.logo} />

      <TextInput
        placeholder="Enter Email.."
        value={email}
        onChangeText={text => {
          setEmail(text);
        }}
        style={styles.container}
      />
      <TextInput
        secureTextEntry
        placeholder="Enter Password.."
        value={password}
        onChangeText={text => {
          setPassword(text);
        }}
        style={styles.container}
      />
      <Button
        title={'Login'}
        style={styles.button}
        onPress={handleLogin}
        // onPress={async () => {
        //   // PersistanceHelper.setObject('loginDetails', {username, password});
        //   dispatch(request({email, password}));

        //   try {
        //     const response = await ApiHelper.post(kApiUserLogin, {
        //       email,
        //       password,
        //     });

        //     dispatch(success(response));
        //     navigation.navigate('Home');

        //     setEmail('');
        //     setPassword('');
        //   } catch (error) {
        //     dispatch(failure(error));
        //   }

        // EventRegister.emit('loginEvent', true);
        // }}
      />

      <UserButton
        text="Forgot Password?"
        onPress={forgotPressed}
        type="TERTIARY"
      />

      <UserButton
        text="Don't have an account? Create one."
        onPress={signUpPressed}
        type="TERTIARY"
      />

      {user.isFetching && <ActivityIndicator />}
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: '70%',
    height: 200,
  },
  button: {
    backgroundColor: 'orange',
    marginVertical: 20,
    fontWeight: 'bold',
    color: 'white',
  },
  container: {
    backgroundColor: '#f5f5f5',
    width: '80%',
    height: 40,
    margin: 40,
    borderColor: '#808080',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    paddingVertical: 10,
    marginVertical: 10,
  },
});

export default SignIn;

//   const handleLogin = () => {
//     if (email && password) {
//       dispatch(request({email, password}));

//       ApiHelper.post(kApiUserLogin, {email, password})
//         .then(response => {
//           dispatch(success(response.data));
//           setUser(true);
//           navigation.navigate('Home');
//         })
//         .catch(error => {
//           dispatch(failure(error.message));
//         });
//     } else {
//       setEmail('');
//       setPassword('');
//     }
//   };

//   const navigation = useNavigation();

//   const forgotPressed = () => {
//     navigation.navigate('ForgotPassword');
//   };

//   const signUpPressed = () => {
//     navigation.navigate('SignUp');
//   };

//   return (
//     <View style={styles.root}>
//       <Image source={logo} style={styles.logo} />

//       <UserInput
//         placeholder="Email.."
//         value={email}
//         setValue={setEmail}
//         onChangeText={text => {
//           setEmail(text);
//         }}
//       />
//       <UserInput
//         placeholder="Password.."
//         value={password}
//         setValue={setPassword}
//         onChangeText={text => {
//           setPassword(text);
//         }}
//         secureTextEntry
//       />

// import React, {useState, useContext} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   ActivityIndicator,
// } from 'react-native';
// import UserContext from '../context/UserContext';
// import {ApiHelper} from '../helper';
// import {useDispatch, useSelector} from 'react-redux';
// import {userActions} from '../features/userSlice';
// import {kApiUserLogin} from '../config/WebService';

// const {request, success, failure} = userActions;

// const LoginScreen = props => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const {setUser} = useContext(UserContext);

//   const dispatch = useDispatch();
//   const user = useSelector(state => state.user);

//   // const handleLogin = () => {
//   //   if (email && password) {
//   //     setEmail(email);
//   //     setPassword(password);
//   //     setUser(true);
//   //   } else {
//   //     setEmail('');
//   //     setPassword('');
//   //   }
//   // };

//   return (
//     <View style={styles.container}>
//       <Text>Login screen</Text>

//       <TextInput
//         style={styles.inputtext}
//         placeholder="Enter Email"
//         value={email}
//         onChangeText={ct => {
//           setEmail(ct);
//         }}
//       />

//       <TextInput
//         style={styles.inputtext}
//         placeholder="Enter Password"
//         value={password}
//         onChangeText={ct => {
//           setPassword(ct);
//         }}
//       />

//       {/* <Button title="Login" onPress={handleLogin} /> */}

//       <Button
//         title={'Login'}
//         onPress={async () => {
//           // PersistanceHelper.setObject('loginDetails', {username, password});
//           dispatch(request({email, password}));

//           try {
//             const response = await ApiHelper.post(kApiUserLogin, {
//               email,
//               password,
//             });

//             dispatch(success(response));

//             setEmail('');
//             setPassword('');
//           } catch (error) {
//             dispatch(failure(error));
//           }

//           // EventRegister.emit('loginEvent', true);
//         }}
//       />

//       <Button
//         title="Sign Up"
//         onPress={() => {
//           props.navigation.navigate('SignupScreen');
//         }}
//       />

//       {user.isFetching && <ActivityIndicator />}
//     </View>
//   );
// };

// export default LoginScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   inputtext: {
//     backgroundColor: 'yellow',
//     margin: 10,
//     padding: 10,
//     width: '70%',
//   },
// });
