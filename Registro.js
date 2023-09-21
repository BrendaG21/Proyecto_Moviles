import { View, TextInput, Button, StyleSheet, Text } from 'react-native';

const LoginScreen = () => {
  return (
 <View style={styles.container}>
<Text style={styles.mensajeUno}>Sign up for a new account</Text>     
<Text style={styles.text1}>Nombre</Text>
 <TextInput
   style={styles.input}
   placeholder="Nombre"
 />
 <Text style={styles.text1}>Email</Text>
 <TextInput
   style={styles.input}
   placeholder="Email"
 />
  <Text style={styles.text1}>Contraseña</Text>
 <TextInput
   style={styles.input}
   placeholder="Contraseña"
 />
  <Text style={styles.text1}>Confirmar Contraseña</Text>
 <TextInput
   style={styles.input}
   placeholder="Confirmar Contraseña"
 />
 <Button title="Crear cuenta" color="pink" width="80%"/>
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
  text1: {
    width: '80%',
    height: 20,
    marginBottom: 10, 
   
  },
  mensajeUno:{
      width:'80%',
      height: 90,
      fontSize: 20,
      fontWeight: 'bold'
  }

});

export default LoginScreen;