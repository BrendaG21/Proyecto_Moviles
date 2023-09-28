// Ejemplo de importar
//import { useCallback, useMemo, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//import { useCallback, useMemo, useEffect, useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
//import Login from "./Login";
import Registro from "./src/page/Registro";
import Login from "./src/page/login";


const Stack = createNativeStackNavigator();

export default function App() {
   return (
         <NavigationContainer>
            <Stack.Navigator>
               <Stack.Screen name="Login" options={{headerShown: false}} component={Login} />
               <Stack.Screen name="Registro" options={{headerShown: false}} component={Registro} />
            </Stack.Navigator>
         </NavigationContainer>

   );
}
 


// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Button
//       title="INICIAR SESION"
//       />
      
//       <Button title='REGISTRARSE'/>

//       <StatusBar style="auto" />
//     </View>
//   );
// }

//Todos son funciones
//Reciben 2 argumentos
//1. Callback
//2. Lista de dependencias

//Toda funcion que no tenga nombre se llama funcion anonima

//useCallback(
  //() => {
    //Tu codigo....
    //......
    //Solo memoriza funciones
 // },
//)

//useMemo memoriza el resultado de la funcion

//
//
//
//


// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
