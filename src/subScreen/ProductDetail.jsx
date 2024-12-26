import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import NavHeader from '../Component/NavHeader';
import { useNavigation, useRoute } from '@react-navigation/native';
import { cartContext } from '../../context/CartScreen';
import Cart from '../Screen/Cart';

const imageUrl = "https://www.wed2b.com/media/catalog/product/p/e/perrie-flowergirl-dresses-front-infinite.jpg?optimize=high&fit=bounds&height=1800&width=1400&canvas=1400:1800";
const size = ["S","M","L","XL"];
const colorArry = [
  "#91A1B0",
  "#B11D1D",
  "#1F44A3",
  "#9F632A",
  "#1D752B",
  "#000000",
]


const ProductDetail = () => {
  const [selectedSize,setSelectedSize] = useState('M');
  const [selectedColor,setSelectedColor] = useState('#91A1B0')

  const route = useRoute();
  const item = route.params.item;
  // console.log(item)

  const {addCart} = useContext(cartContext);
  const Navigation = useNavigation();

  const handleAddCart = (item)=>{
    const newCart =  {...item,
      color:selectedColor,
      size:selectedSize
    }
   
        addCart(newCart);
        Navigation.navigate('Cart')
  }

  return (
    <View>
      <NavHeader />
       <Image source={{uri:item.image}} style={styles.image} resizeMode='cover' />
       <View style={styles.priceContainer}>
        <Text style={[,styles.name,styles.price]}>{item.title}</Text>
        <Text style={[styles.price]}>${item.price}</Text>
       </View>
       <Text style={styles.sizeTxt}>Size</Text>

       <View style={styles.sizeContainer}>
        {size.map((sizes)=>{
        return(
          <TouchableOpacity 
          onPress={()=>setSelectedSize(()=>sizes)}
          >
            <Text style={[styles.sizeTXT,
            selectedSize === sizes && {color:'red'}
              ]}>{sizes}</Text>
          </TouchableOpacity>
        )
       })}  
       </View>
          <Text style={[styles.sizeTXT,styles.padding]}>Color</Text>

          <View style={styles.colorBoxCon}>
            {
              colorArry.map((color)=>(
                <TouchableOpacity style={[ styles.colorBoxOuter, 
               selectedColor === color && {borderWidth:3,borderColor:color}
                ]}  >

                <TouchableOpacity style={[styles.colorBox,{backgroundColor:color}]} onPress={()=>setSelectedColor(color)}/>
                </TouchableOpacity>
              ))
            }
          </View>
          <TouchableOpacity style={styles.btn} onPress={()=>handleAddCart(item)} >
            <Text style={styles.btnTxt}>Add To Cart</Text>
          </TouchableOpacity>
    </View>
  )
}

export default ProductDetail

const styles = StyleSheet.create({
  image:{
    width:"100%",
    height:480,
  },
  priceContainer:{
    width:'100%',
    flexDirection:'row',
    padding:20,
    justifyContent:'space-between',
  },
  price:{
    fontSize:18,
    fontWeight:'500',
    color:"gray",
  },
  name:{
    color:"#00000"
  },
  sizeTxt:{
    fontSize:18,
    fontWeight:'500',
    marginHorizontal:20,
  },
  sizeContainer:{
   paddingHorizontal:20,
   width:'100%',
   flexDirection:'row',
   gap:20,
   alignItemsa:'center',
   marginVertical:10,
   
  },
  sizeTXT:{
    backgroundColor:"#99999",
    // height:20,
    // width:20,
    // padding:3,
    paddingVertical:4,
    paddingHorizontal:8,
    borderRadius:25,
    fontSize:16,
    fontWeight:'600',
    justifyContent:'center',
    alignItems:'center',
  },
  padding:{
    paddingHorizontal:20,
    fontSize:20,
  },
  colorBoxCon:{
    flexDirection:'row',
    marginHorizontal:20,
    marginVertical:15,
  
    
  },
  colorBoxOuter:{
    
    borderRadius:35,
    height:46,
    width:46,
    alignItems:'center',
    justifyContent:'center',
    marginHorizontal:10,
  },
  colorBox:{
    height:32,
    width:32,
    borderRadius:18,
    
  },
  btn:{
    backgroundColor:"red",
    marginHorizontal:20,
    borderRadius:10,

  },
  btnTxt:{
   fontSize:20,
   paddingVertical:10,
   textAlign:'center',
  }
})