import { useState } from "react";
import { emailValidator } from "../helpers/emailValidator";
import { passwordValidator } from "../helpers/passwordValidator";
import { View,Text,StyleSheet } from "react-native";
import { Button, TextInput } from "react-native-paper";
import React from "react";

const LoginUser = () => {
    const [email, setEmail] = useState<{value: string; error: string}> ({value: '', error: ''})
    const [password, setPassword] = useState<{value: string; error: string;}> ({value: '', error:''})

    const OnLoginPress = () => {
        const emailError = emailValidator(email.value)
        const passwordError = passwordValidator(password.value)
        if(emailError||passwordError){
            setEmail({...email, error: email.error})
            setPassword({...password, error: password.error})
            return;
        }
    }
    return (
        <View style={styles.container}>
          <Text style={styles.title}>Login Here</Text>
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Email"
              onChangeText={(text: string) => setEmail({ value: text, error: '' })}
              value={email.value}
            />
            <TextInput
              style={styles.input}
              placeholder="Password"
              onChangeText={(text: string) =>
                setPassword({ value: text, error: '' })
              }
              value={password.value}
              secureTextEntry={true}
            />
          </View>
          <Button mode="contained" onPress={OnLoginPress} style={styles.button}>
            Login
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
      inputContainer: {
        width: '80%',
      },
      input: {
        marginBottom: 15,
      },
      button: {
        marginTop: 20,
      },
    });
    
    export default LoginUser
