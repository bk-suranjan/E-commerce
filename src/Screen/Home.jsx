import {FlatList, StyleSheet, Text, TextInput, View} from 'react-native';
import React, {useState} from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import NavHeader from '../Component/NavHeader';
import Category from '../Component/Category';
import ProductCard from '../Component/ProductCard';
import data from '../Data/data.json';






const Home = () => {
  const list = ['New clothes', 'Men', 'Women', 'Winter', 'Summer'];
  const [selectedCategroy, setSelectedCategroy] = useState('Men');
  const [product,setProduct] = useState(data.products);
  
  const handleLiked = (item) => {
    const newProduct = product.map((prod) => {
      if (prod.id === item.id) {
        return { ...prod, isLiked: !prod.isLiked  };
      }
      return prod;
    });
    setProduct(newProduct);
  };
  

  return (
    <View style={styles.container}>
      <NavHeader />

      {/* Product Section */}
      <FlatList
        numColumns={2}
        // data={[1, 2, 3, 4, 5, 6]} // Example product data
        data={product}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => (
          <ProductCard item={item} handleLiked={handleLiked}/>
        )}
        keyExtractor={product.id}
        contentContainerStyle={styles.productContainer}

          
        ListHeaderComponent={
          <>
            <Text style={styles.heading}>Match Your Style</Text>
            <View style={styles.textInputContainer}>
              <Fontisto name="search" size={25} />
              <TextInput placeholder="Search here!!" style={styles.textInput} />
            </View>

            {/* Categories Section */}

            <FlatList
              data={list}
              renderItem={({item}) => (
                <Category
                  item={item}
                  selectedCategroy={selectedCategroy}
                  setSelectedCategroy={setSelectedCategroy}
                />
              )}
              keyExtractor={item => item.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </>
        }
      
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1, // Ensure the container takes the full screen height
    backgroundColor: '#f9f9f9',
  },
  heading: {
    fontSize: 28,
    fontWeight: 'bold',
    marginVertical: 20,
    marginHorizontal: 20,
  },
  textInputContainer: {
    width: '90%',
    flexDirection: 'row',
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 8,
    paddingHorizontal: 10,
  },
  textInput: {
    paddingVertical: 10,
    fontSize: 18,
    flex: 1,
  },
  categoryContainer: {
    paddingHorizontal: 10,
    marginVertical: 10,
  },
  productContainer: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
});

export default Home;
