import {TouchableOpacity ,StyleSheet, Text, View,FlatList } from 'react-native';
import React, { useContext } from 'react';
import NavHeader from '../Component/NavHeader';
import CartCard from '../Component/CartCard';
import { cartContext } from '../../context/CartScreen';


const Cart = () => {
  const {carts} = useContext(cartContext);
  return (
    <View>
        <NavHeader isCart={true} />
   
      <FlatList
      data={carts}
      showsHorizontalScrollIndicator={false}
      renderItem={(item)=>(
        <CartCard item={item} />
      )}
      ListFooterComponent={
        <>
        
        <View style={styles.footerContainer}>
       <View style={styles.princeContainer}>
        <Text style={styles.title}>Total</Text>
        <Text style={styles.title}>$122.3</Text>
       </View>
       <View style={styles.princeContainer}>
        <Text style={styles.title}>Shipping</Text>
        <Text style={styles.title}>$0.0</Text>
       </View>
       <View style={styles.line}/>
       <View style={styles.princeContainer}>
       <Text style={[styles.title]}>Grand Total</Text>
        <Text style={styles.title}>$122.3</Text>
       </View>
        <TouchableOpacity style={styles.btn}>
          <Text style={styles.btnText} >Checkout</Text>
        </TouchableOpacity>
      </View>
        </>
      }
      />

    
      
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  footerContainer:{
    paddingHorizontal:20,
    width:'100%',
    paddingVertical:10,
    paddingBottom:100,
  },
  princeContainer:{
    flexDirection:'row',
    width:'90%',
    justifyContent:'space-between',
    alignItems:'center',
    // backgroundColor:'pink',
    marginVertical:7,
  },
  title:{
    fontSize:20,
    opacity:0.8,
    fontWeight:'500',
    color:'gray',
  },
  line:{
    borderWidth:1,
    width:'90%',
  },
  btn:{
    width:'90%',
    height:60,
    backgroundColor:'red',
    borderRadius:10,
    justifyContent:'center',
  //  alignItems:'center',
  marginVertical:10,

  },
  btnText:{
   textAlign:'center',
   fontSize:18,
  }
});