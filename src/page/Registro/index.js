import styles from "../../styles/Registro"
import React, { useState, useEffect } from 'react';
import { Button, Image, View } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { SafeAreaView, Text, TextInput, TouchableOpacity} from "react-native";

export default function Registro(props){
  const {navigation} = props;

  const goToLogin = () => {
    navigation.navigate("Login");
  }
//Empieza lo de  camara
  const [image, setImage] = useState(null);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.firstSection}>
        <View style={styles.spacing}>
            <Text style={styles.title}>Sign up for a new account</Text>
          </View>

          <View style={styles.spacing}>
            <Text style={styles.subtitle}>We just need some more information</Text>
          </View>

      </View>
     
      <View style={styles.SecondSection}>
        <View>

          <View style={styles.spacing}>
            <Text style={styles.labels}>Name</Text>
              <TextInput
              style={styles.textInput}
              underlineColorAndroid="pink"
              placeholder="Nombre"
            />
          </View>

          <View style={styles.spacing}>
            <Text style={styles.labels}>Email address</Text>
              <TextInput
              style={styles.textInput}
              underlineColorAndroid="pink"
              placeholder="ejemplo@ejemplo.com"
              keyboardType="email-address"
              returnKeyType="next"
            />
          </View>

          <View style={styles.spacing}>
          <Text style={styles.labels}>Password</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="pink"
              placeholder="**********"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.spacing}>
          <Text style={styles.labels}>Confirm Password</Text>
            <TextInput
              style={styles.textInput}
              underlineColorAndroid="pink"
              placeholder="**********"
              secureTextEntry={true}
            />
          </View>

          <View style={styles.spacing}>
            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Registrarse</Text>
            </TouchableOpacity>
          </View>

        </View>

            <View style={[styles.spacing, styles.row]}>
              <Text style={styles.labels}>Already have an account?</Text>
              <TouchableOpacity onPress={goToLogin}>
                <Text style={styles.signup}>Log in</Text>
              </TouchableOpacity>
            </View>

            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
              {image && <Image source={{ uri: image }} style={{ width: 150, height: 150 }} />}
              <Button title="Seleccionar imagen" onPress={pickImage} color='pink'  />
            </View>

      </View>

    </SafeAreaView>
  );
}