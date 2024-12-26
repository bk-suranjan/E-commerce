import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import ProductDetail from '../subScreen/ProductDetail';
import Home from '../Screen/Home';

const NavHeader = ({isCart}) => {
  const Navigation = useNavigation();
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.menuContainer} onPress={()=>Navigation.navigate('StackHome')} >
        {
          isCart? <Ionicons name={'arrow-back'} size={28} /> :  <Image source={require('../Assets/Vector.png')} style={styles.menuBtn}/>
        }
      
      </TouchableOpacity>

      <View>
        {
          isCart && <Text style={styles.CartTitle}>My Cart</Text> 
        }
      </View>

      <View>
        <Image
          source={require('../Assets/person.png')}
          style={styles.profileImg}
        />
      </View>
    </View>
  );
};

export default NavHeader;

const styles = StyleSheet.create({
    profileImg:{
        maxHeight:45,
        maxWidth:45,
        borderRadius:22.5,
        
    },
    container:{
        height:60,
        width:"100%",
        justifyContent:'space-between',
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:20,
       
        // backgroundColor:"blue",
    },
    menuBtn:{
        height:25,
        width:23,
        margin:10,
    },
    menuContainer:{
        backgroundColor:"#9a9a9a",
        borderRadius:22.5,
    },
    CartTitle:{
      fontSize:20,
      fontWeight:'600',
    },
});
