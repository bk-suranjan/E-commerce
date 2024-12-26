import { Image,StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native';
import React from 'react';
import Feather from 'react-native-vector-icons/Feather';


const CartCard = ({item}) => {
    // const { id, image, price, title } = item;
    const data = item.item.item;
    // console.log(data)
  return (
    <View style={styles.container}>
     <View style={styles.innerContainer}>
        <Image source={{uri:data.image}} style={styles.image} />

        <View>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.price}>${data.price}</Text>
        <View style={styles.circleContainer}>
        <View style={[styles.circle,{backgroundColor:data.color}]} />
         <View style={[styles.circle,styles.sizeCircle]}><Text style={styles.title}>{data.size}</Text></View>
        </View>
        </View>
     </View>
         <TouchableOpacity >
        <Feather name={"trash-2"} size={30} />
        </TouchableOpacity>
    </View>
  );
};

export default CartCard;

const styles = StyleSheet.create({
    container:{
        backgroundColor:'gray',
        borderRadius:20,
        width:'90%',
        margin:'auto',
        flexDirection:'row',
        padding:1,
        justifyContent:"space-between",
        alignItems:'center',
        paddingRight:15,
        marginVertical:20,
    },
    innerContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:20,
    },
    image:{
        height:125,
        width:85,
        borderRadius:12,
    },
    title:{
        fontSize:20,
        fontWeight:'600',
    },
    price:{
fontSize:17,
fontWeight:'500',
opacity:0.6,
marginTop:5,
    },
    circleContainer:{
        flexDirection:'row',
        gap:15,
    },
    circle:{
      
        height:40,
        width:40,
        marginTop:10,
        borderRadius:26,
    },
    sizeCircle:{
        justifyContent:'center',
        alignItems:'center',
        padding:1,
        backgroundColor:'#fff',
        borderRadius:25,
    }
});