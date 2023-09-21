import {View, Text, TextInput, TouchableOpacity} from "react-native"
import styles from "../../styles/login"

function login(){
    return(
        <view style={styles.conntainer}>
            <Text>Hola mundo</Text>
            <TexttInpu
                placeholder="email"
                style={styles.inputs}
                underlineColorAndroid="purple"
            />
             <TexttInpu
                placeholder="password"
                style={styles.inputs}
                underlineColorAndroid="purple"
            />
        </view>
    )
}

export default login;