import { StyleSheet} from 'react-native'
import React, { createContext, useState } from 'react'

export const cartContext = createContext();

const CartScreen = ({children}) => {
const [carts,setCarts] = useState([]);

const addCart = (item)=>{
  const itemExist =  carts.findIndex((cart)=>(cart.id === item.id));
  if (itemExist === -1) {
    setCarts([...carts,{item}
      
    ])
  }
  // console.log(item)

}

const value = {
  carts,
  addCart,
}
  return (
   <cartContext.Provider value={value}>{children}</cartContext.Provider>  )
}

export default CartScreen

const styles = StyleSheet.create({})