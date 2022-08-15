import { StyleSheet,Dimensions } from "react-native";

export default StyleSheet.create({
     view:{
          flex:1,
          backgroundColor:"#d6cece",
          margin:10,
          padding:15,
          borderRadius:5,
     },
     image:{
          width:"100%",
          height:Dimensions.get("window").height/4,
          alignSelf:"center",
          borderRadius:5,
          resizeMode:"contain"
     },
     description:{
          margin:2,
          fontWeight:"bold",
          fontSize:15
     },
     stock:{
         color:"red",
         fontWeight:"bold",
         fontSize:17
     },
     innerContainer:{
          paddingTop:5
     }

})