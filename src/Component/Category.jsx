import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';

const Category = ({item,selectedCategroy,setSelectedCategroy}) => {

  

  return (
    
    <TouchableOpacity onPress={()=>(setSelectedCategroy(item))} >
      <Text style={[styles.CategroyTxt,
        selectedCategroy === item && {color:'red',backgroundColor:'blue'}
      ]}>{item}</Text>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
    CategroyTxt:{
        paddingVertical:10,
        // justifyContent:'center',
        fontSize:18,
        borderRadius:13,
        textAlign:'center',
        backgroundColor:'pink',
        width:"90%",
        marginVertical:25,
        marginHorizontal:20,
    },
});