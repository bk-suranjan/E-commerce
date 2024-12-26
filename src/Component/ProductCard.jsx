import { useNavigation } from '@react-navigation/native';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

import AntDesign from 'react-native-vector-icons/AntDesign'
 
const ProductCard = ({item,handleLiked}) => {
  const navigation = useNavigation();
   
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.navigate('ProductDetail',{item})} >
    
        <Image source={{uri: item.image}} style={styles.redImg} resizeMode='contain' /> 
      
        <View style={styles.namePriceConainer}>
        <Text style={styles.ProductName}>{item.title}</Text>
        <Text style={styles.ProductPrice}>${item.price}</Text>
        </View>

        <TouchableOpacity
        style={styles.likeBtnCon}
        onPress={()=>handleLiked(item)}
       > 
       {
        item?.isLiked ? (  <AntDesign name="heart" size={18} color="red" />) : (  <AntDesign name="hearto" size={18} color="red" />)
       }
       
      
      </TouchableOpacity>
      
     
    </TouchableOpacity>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
    container:{
        flex:1,
    },
    redImg:{
        height:260,
        width:'100%',
        borderRadius:10,
    },
    namePriceConainer:{
        marginHorizontal:40,
        marginVertical:10,
        gap:2,
    },
    ProductName:{
        fontSize:18,
        fontWeight:'600',
        color:"#444444",
    },
    ProductPrice:{
        fontSize:18,
        color:"#9c9c9c",
        fontWeight:'600',
    },
    likeBtnCon:{
        position:'absolute',
        top:12,
        left:155,
        fontSize:18,
        backgroundColor:'#fff',
        width:30,
        height:30,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:20,
    },
    likeBtn:{
        fontSize:18,
    },
});

