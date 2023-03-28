import {View, Text} from 'react-native';
import React from 'react';
import Product from '../components/Product';

const Shop = () => {
  return (
    <View
      style={{
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        paddingHorizontal: 5,
      }}>
      <Product />
    </View>
  );
};

export default Shop;
