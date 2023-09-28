import styles from "../../styles/Registro"
import { StyleSheet, SafeAreaView, View, Text, TextInput, TouchableOpacity} from "react-native";

export default function Registro(props){
  const {navigation} = props;

  const goToLogin = () => {
    navigation.navigate("Login");
  }

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

      </View>

    </SafeAreaView>
  );
}