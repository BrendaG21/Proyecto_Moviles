// Ejemplo de importar
//import { useCallback, useMemo, useEffect} from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
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