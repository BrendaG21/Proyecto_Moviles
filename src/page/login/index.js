import styles from "../../styles/login"
import {  SafeAreaView, View, Image , Text, TextInput, TouchableOpacity} from "react-native";

export default function Login(props){

  const {navigation} = props;

  const goToRegister = () => {
    navigation.navigate("Registro");
  }

  return(
    <SafeAreaView style={styles.container}>

      <View style={styles.firstSection}>
        <Image 
        source={{
          uri: 'https://cdn.pixabay.com/photo/2016/02/07/19/48/aurora-1185464_1280.jpg',
        // https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg
        }}
        style={{ width:"100%", height: "120%", resizeMode:"cover"}}
        />
       <View 
        style={{
          position:'absolute',
      }}>
        <Text style={styles.title}>Trevelo</Text>
       </View>

      </View>

      <View style={styles.secondSection}>
        <View>
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
            <Text style={styles.forgotPassword}>Forgot password</Text>
          </View>

          <View style={styles.spacing}>
            <TouchableOpacity style={styles.button} >
              <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </View>
        
        <View style={[styles.spacing, styles.row]}>
          <Text style={styles.labels}>Don't have an account?</Text>
          <TouchableOpacity onPress={goToRegister}>
            <Text style={styles.signup}>Sign up</Text>
          </TouchableOpacity>
        </View>

      </View>

    </SafeAreaView>
  );
}
