import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Fontisto from 'react-native-vector-icons/Fontisto';
import NavHeader from '../Component/NavHeader';

const About = () => {
  return (
   <View>
    <NavHeader />
   </View>
  );
};

export default About;

const styles = StyleSheet.create({
  container: {
    height: 60, 
    width: '100%',
    backgroundColor: '#888',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', 
    paddingHorizontal: 10, 
    },
  img: {
    height: 48,
    width: 48,
    borderRadius: 24,
  },
});
