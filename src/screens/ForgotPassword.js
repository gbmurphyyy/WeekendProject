import React, {useState} from 'react';
import {Text, View, StyleSheet} from 'react-native';
import UserInput from '../components/UserInput';
import UserButton from '../components/UserButton';
import {useNavigation} from '@react-navigation/native';

const ForgotPassword = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation();

  const sendPressed = () => {
    navigation.navigate('SignIn');
  };

  const signInPressed = () => {
    navigation.navigate('SignIn');
  };

  return (
    <View style={styles.root}>
      <Text style={styles.title}>Reset Your Password.</Text>

      <UserInput
        placeholder="Enter Username.."
        value={username}
        setValue={setUsername}
      />

      <UserInput
        secureTextEntry
        placeholder="Reset Password.."
        value={password}
        setValue={setPassword}
      />

      <UserButton text="Send" onPress={sendPressed} />

      <UserButton
        text="Back to Sign in."
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
});

export default ForgotPassword;
