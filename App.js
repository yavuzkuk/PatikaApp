import React from 'react';
import {StyleSheet,FlatList,Dimensions, Text, View,TextInput,SafeAreaView} from 'react-native';
import Cards from './src/Components/Cards/cards';
import BigCard from './src/Components/BigCard';
import product_data from "./src/product_data.json"


export default function App() {

  const Render = ({item}) => <Cards product_data={item}></Cards>
  const Search = () => <TextInput placeholder='  Ara..' placeholderTextColor={"blue"} style={styles.searchBox}></TextInput>

  return (<SafeAreaView style={styles.container}>
      <View>
        
      <FlatList
      data={product_data}
      renderItem={Render}
      numColumns={2}
      ListHeaderComponent={Search}
      >

          </FlatList>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  searchBox:{
    width:Dimensions.get("window").width/1.3,
    height:Dimensions.get("window").height/19,
    backgroundColor:"#cbf7eb",
    alignSelf:'center',
    borderRadius:16,
    marginTop:5,
  }
  
})

