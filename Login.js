//import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const LoginScreen = () => {
  return (
 <View style={styles.container}>
<Text style={styles.text}>Usuario</Text>
 <TextInput
   style={styles.input}
   placeholder="Usuario"
 />
 <Text style={styles.text}>Contraseña</Text>
 <TextInput
   style={styles.input}
   placeholder="Contraseña"
 />
 <Text style={styles.textrecup}>Recuperar Contraseña</Text>
 <Button title="Login" color="pink" width="80%"/>
</View>
  );
  };

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    height: 40,
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  text: {
    width: '80%',
    height: 20,
    marginBottom: 10,
  },
  textrecup:{
    width: '80%',
    marginBottom: 10,
    fontSize:15,
    paddingLeft: 150,
  }

});

export default LoginScreen;

