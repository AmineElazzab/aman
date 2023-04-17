// import Product from '../components/Product';
import Category from '../components/Category';
import {View, Text ,TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {getProductsByCategory} from '../utils/api';
import {useQuery} from 'react-query';
import Product from '../components/Product';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';


const Shop = () => {
  const navigation = useNavigation();  

  return (
    <>
      {/* <Category categoryId={categoryId} /> */}
      <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#112B54',
            width: '100%',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={25} 
            style={{color:"#fff"}}
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold', color:"#fff"}}>Shop</Text>
          <View />

        </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: 5,
          marginBottom:100
        }}>
        
        <Product />
      </View>
    </>
  );
};

export default Shop;
