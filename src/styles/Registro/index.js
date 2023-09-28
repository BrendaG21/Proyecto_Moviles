import { StyleSheet } from "react-native";

export default StyleSheet.create({
 container:{
    flex:1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  firstSection:{
    flex: 1, 
    paddingLeft: 20,
    justifyContent: 'center',
    //backgroundColor:"purple",
    width: "100%",
  },
  SecondSection:{
    flex: 2,
    //backgroundColor: "green",
    width:"100%",
    padding: 20,
    justifyContent: "space-between"
  },
  labels:{
    color: "#ccc",
  },
  textInput:{
    color: "#000",
    padding: 8,
  }, 
  button:{
    backgroundColor: "pink",
    padding: 15,
    borderRadius: 30,
    alignItems: "center"
  },
  buttonText:{
    color: "white",
    fontWeight:"bold"
  },
  spacing:{
    marginTop: 10,
  },
  title:{
    fontSize: 32,
    fontWeight: "bold",
  },
  subtitle:{
    color: "#8c8c8c",
  },
  row:{
    flexDirection:"row",
    justifyContent:'center'
  },
  signup:{
    color:"pink",
    paddingLeft: 5,
  }
})