import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import UserInput from '../components/UserInput';
import UserButton from '../components/UserButton';
import {useNavigation} from '@react-navigation/native';
import {userActions} from '../features/userSlice';

const {request} = userActions;

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');

  const navigation = useNavigation();

  const registerPressed = () => {
    // Perform your registration logic here
    navigation.navigate('SignIn');
  };

  const signInPressed = () => {
    navigation.navigate('SignIn');
  };

  const termsPressed = () => {
    console.warn('Terms');
  };

  const privacyPressed = () => {
    console.warn('Policy');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Create An Account!</Text>

      <UserInput placeholder="Email.." value={email} setValue={setEmail} />

      <UserInput
        secureTextEntry
        placeholder="Password.."
        value={password}
        setValue={setPassword}
      />

      <UserInput
        secureTextEntry
        placeholder="Repeat Password.."
        value={repeatPassword}
        setValue={setRepeatPassword}
      />

      <UserButton text="Register" onPress={registerPressed} />

      <Text style={styles.text}>
        By registering, you confirm you accept our{' '}
        <Text style={styles.link} onPress={termsPressed}>
          Terms of Use
        </Text>{' '}
        and{' '}
        <Text style={styles.link} onPress={privacyPressed}>
          Privacy Policy
        </Text>
        .
      </Text>

      <UserButton
        text="Have an account? Sign in."
        onPress={signInPressed}
        type="TERTIARY"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  root: {
    alignItems: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#800000',
    margin: 10,
  },
  text: {
    color: 'gray',
    marginVertical: 5,
  },
  link: {
    color: '#0000cd',
  },
});

export default SignUp;

// import React, {useState, useEffect} from 'react';
// import {
//   View,
//   Text,
//   TextInput,
//   Button,
//   StyleSheet,
//   ActivityIndicator,
//   Alert,
// } from 'react-native';
// import {userActions} from '../features/userSlice';
// import ApiHelper from '../helper';
// import {kApiUserSignup} from '../config/WebService';
// import {useDispatch, useSelector} from 'react-redux';

// const {request, success, failure} = userActions;

// const SignupScreen = props => {
//   const [email, setEmail] = useState();
//   const [password, setPassword] = useState();
//   const [errorMsg, setErrorMsg] = useState(undefined);

//   const user = useSelector(state => state.user);

//   useEffect(() => {
//     if (user?.errorMessage?.message) {
//       //   Alert.alert('Error', user?.errorMessage?.message);
//       setErrorMsg(user?.errorMessage?.message);
//     } else {
//       setErrorMsg(undefined);
//     }
//   }, [user]);

//   const dispatch = useDispatch();

//   return (
//     <View style={styles.container}>
//       <Text>Sign Up Page</Text>

//       <TextInput
//         style={styles.inputText}
//         placeholder="Enter Email"
//         value={email}
//         onChangeText={ct => {
//           setEmail(ct);
//         }}
//       />

//       <TextInput
//         style={styles.inputText}
//         placeholder="Enter Password"
//         value={password}
//         onChangeText={ct => {
//           setPassword(ct);
//         }}
//       />
//       {errorMsg && errorMsg.length > 0 && (
//         <Text style={{color: 'red', marginHorizontal: 20}}>{errorMsg}</Text>
//       )}

//       <Button
//         title={'Signup'}
//         onPress={() => {
//           dispatch(request({email, password}));

//           ApiHelper.post(kApiUserSignup, {email, password})
//             .then(response => {
//               dispatch(success(response));

//               // props.navigation.navigate('LoginScreen');
//             })
//             .catch(error => {
//               dispatch(failure(error));
//             });
//           // setEmail('');
//           // setPassword('');
//         }}
//       />
//       {user.isFetching && <ActivityIndicator />}

//       <Button
//         title="Back to Login"
//         onPress={() => props.navigation.navigate('LoginScreen')}
//       />
//     </View>
//   );
// };

// export default SignupScreen;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'center',
//   },

//   inputText: {
//     backgroundColor: 'pink',
//     margin: 10,
//     padding: 10,
//     width: '70%',
//   },
// });
