import React from "react";
import { View,Text,Image,StyleSheet,Dimensions} from "react-native";
import styles from "./cards_styles"

const cards = ({product_data}) =>{

     return(<View style={styles.view}>
               <Image style={styles.image} source={{uri:product_data.imgURL}}></Image>
               <View style={styles.innerContainer} >
                    <Text style={styles.description}>{product_data.title}</Text>
                    <Text>{product_data.price}</Text>
                    <Text style={styles.stock}>{product_data.inStock === true ? "": "Stokta yok"}</Text>
               </View>
          </View>
     )

} 


export default cards