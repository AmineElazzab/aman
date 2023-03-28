import { useNavigation } from '@react-navigation/native';
import React from 'react';
import {View, Text, Image, TouchableOpacity, FlatList} from 'react-native';
import {getProducts} from '../utils/api';
import {useQuery} from 'react-query';


function Product() {
  const navigation = useNavigation();
  
  //get product from api
  const {data, isLoading, error} = useQuery('products', getProducts);

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <View>
      <FlatList
        data={data}
        renderItem={({item}) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('ProductDetail')}
            style={{
              marginTop: 10,
              backgroundColor: '#FFF',
              height: 170,
              width: 150,
              elevation: 2,
              borderRadius: 30,
              // padding: 15,
              marginRight: 10,
              marginLeft: 2,
              marginBottom: 10,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={{uri: item.image}}
              style={{
                width: 100,
                height: 100,
                borderRadius: 50,
                marginTop: 10,
              }}
            />
            <Text
              style={{
                // marginTop: 100,
                fontWeight: 'bold',
                fontSize: 15,
                color: '#000',
                textAlign: 'center',
                justifyContent: 'center',
              }}>
              {item.name}
            </Text>
            <Text
              style={{
                // marginTop: 100,
                fontWeight: 'bold',
                fontSize: 15,
                color: '#000',
                textAlign: 'center',
                justifyContent: 'center',
              }}>
              {item.price}
            </Text>
          </TouchableOpacity>
        )}
        keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
  
}

export default Product;
