import { StyleSheet,View,Text } from 'react-native';
import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/AntDesign';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import Entypo from 'react-native-vector-icons/Entypo';
import Ionicons from 'react-native-vector-icons/Ionicons';



import Reorder from './src/Screen/Reorder';
import Account from './src/Screen/Account';
import Cart from './src/Screen/Cart';
import Home from './src/Screen/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProductDetail from './src/subScreen/ProductDetail';
import CartScreen, { cartContext } from './context/CartScreen';





const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const StackHome = ()=>{
  return(
    <Stack.Navigator
    screenOptions={{
      headerShown:false,
    }}
    //  initialRouteName='ProductDetail'
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='ProductDetail' component={ProductDetail}/>
    </Stack.Navigator>
  )
}



const App = () => {
  return (
    <CartScreen >
    <NavigationContainer>
      <Tab.Navigator initialRouteName='StackHome'
        screenOptions={{
          headerShown: false,
          tabBarShowLabel: false,
          tabBarActiveTintColor: 'red',
          tabBarInactiveTintColor: 'gray', 
          tabBarStyle:{
            height:80,
            paddingBottom:10,
            paddingTop:10,
          }
        }}
      >
           <Tab.Screen
          name="StackHome"
          component={StackHome}
          options={{
            tabBarIcon: ({ focused, size = 24, color = 'black' }) => (
              <Icon name="home" size={size} color={color} />
            ),
          }}
        />


        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            tabBarIcon: ({ focused, size = 24, color = 'black' }) => {
              const { carts }= useContext(cartContext);
             
             return (
              <View style={{position:'relative'}}>
              <FontAwesome6 name="cart-shopping" size={size} color={color} />
              <Text style={styles.cartCount}>{carts.length}</Text>
              </View>
            )},
          }}
        />
        <Tab.Screen
          name="Reorder"
          component={Reorder}
          options={{
            tabBarIcon: ({ focused, size = 24, color = 'black' }) => (
              <Entypo name="menu" size={size} color={color} />
            ),
          }}
        />
        
        <Tab.Screen
          name="Account"
          component={Account}
          options={{
            tabBarIcon: ({ focused, size = 24, color = 'black' }) => (
              <Ionicons name="person" size={size} color={color} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    </CartScreen>
   
  );
};

export default App;

const styles = StyleSheet.create({
  // Add styles here if needed for other c
  cartCount:{
    fontSize:17,
    color:'#fff',
    fontWeight:'500',
    position:'absolute',
    top:-10,
    right:-15,
    width:20,
    backgroundColor:'red',
    borderRadius:25,
    textAlign:'center',
    textAlignVertical:'center',
  },
});
