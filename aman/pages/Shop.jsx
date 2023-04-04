// import Product from '../components/Product';
import Category from '../components/Category';
import {View, Text} from 'react-native';
import React, {useState} from 'react';
import {getProductsByCategory} from '../utils/api';
import {useQuery} from 'react-query';
import Product from '../components/Product';

const Shop = () => {
  // const {categoryId} = route.params;
  // const [category, setCategory] = useState(null);

  // const {data, isLoading, error} = useQuery(
  //   ['products', categoryId],
  //   () => getProductsByCategory(categoryId),
  //   {
  //     onSuccess: data => {
  //       setCategory(data);
  //     },
  //   },
  // );

  // if (isLoading) {
  //   return <Text>Loading...</Text>;
  // }
  // if (error) {
  //   return <Text>Error: {error.message}</Text>;
  // }

  return (
    <>
      {/* <Category categoryId={categoryId} /> */}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: 5,
        }}>
        <Product />
      </View>
    </>
  );
};

export default Shop;
