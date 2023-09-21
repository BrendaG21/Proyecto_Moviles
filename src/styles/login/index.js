import { StyleSheet } from "react-native";

export default StyleSheet.create({
  conntainer:{
      //Que ocupe todo el espacio disponible para eso es el flex
      flex: 1,
      justifyContent: "center",
      alignItems: "center"
  },
  title:{
      fontSize: 24
  } ,
  inputs: {
      width: "100%",
      fontSize: 36,
      padding: 10
  } 
})