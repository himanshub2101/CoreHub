import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import {userNameValidator,} from '../helpers/usernameValidator';
import {emailValidator,} from '../helpers/emailValidator';
import {passwordValidator,} from '../helpers/passwordValidator';
import {confirmPasswordValidator,} from '../helpers/confirmPasswordValidator';


const SignUpUser = () => {
  const [username, setUserName] = useState({ value: '', error: '' });
  const [email, setEmail] = useState({ value: '', error: '' });
  const [password, setPassword] =useState({ value: '', error: '' });
  const [confirmpassword, setConfirmPassword] =useState({ value: '', error: '' });

  const onSignupPressed = () => {
    const usernameError = userNameValidator(username.value);
    const passwordError = passwordValidator(password.value);
    const emailError = emailValidator(email.value);
    const confirmpasswordError = confirmPasswordValidator(confirmpassword.value);

    if (usernameError || emailError || passwordError || confirmpasswordError) {
      setUserName({ ...username, error: usernameError });
      setEmail({ ...email, error: emailError });
      setPassword({ ...password, error: passwordError });
      setConfirmPassword({ ...confirmpassword, error: confirmpasswordError });
      return;
    } else if (password.value !== confirmpassword.value) {
      setConfirmPassword({ ...confirmpassword, error: 'Password doesn\'t match with confirm password' });
      return;
    } else if (confirmpassword.value !== password.value) {
      setPassword({ ...password, error: 'Confirm password doesn\'t match with password' });
      return;
    }
    // Continue with signup logic
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Register Here</Text>
      <View>
        
        <TextInput
          style={styles.input}
          placeholder="Username"
          onChangeText={(text: string) => setUserName({ value: text, error: '' })}
          value={username.value}
        />
         <TextInput
          style={styles.input}
          placeholder="Email"
          onChangeText={(text: string) => setEmail({ value: text, error: '' })}
          value={email.value}
        />
        <TextInput
          style={styles.input}
          placeholder="Password"
          onChangeText={(text: string) => setPassword({ value: text, error: '' })}
          value={password.value}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.input}
          placeholder="Confirm Password"
          onChangeText={(text: string) => setConfirmPassword({ value: text, error: '' })}
          value={confirmpassword.value}
          secureTextEntry={true}
        />
       
      </View>
      <Button mode="contained" onPress={onSignupPressed} style={styles.button}>
        Sign Up
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
  },
  button: {
    marginTop: 20,
  },
});

export default SignUpUser;
