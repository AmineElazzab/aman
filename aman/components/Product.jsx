import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  FlatList,
  Alert,
} from 'react-native';
import {getProducts} from '../utils/api';
import {useQuery} from 'react-query';

function Product() {
  const navigation = useNavigation();

  //get product from api
  const {data, isLoading, error} = useQuery('products', getProducts);

  // console.log(JSON.stringify(data, 2, null));

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
            keyExtractor={item => `${item._id}-${item.index}`}
            onPress={() =>
              navigation.navigate('App', {
                screen: 'Details',
                params: {productId: item._id},
              })
            }
            style={{
              marginTop: 10,
              backgroundColor: '#FFF',
              height: 210,
              width: 188,
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
              source={{uri: `http://192.168.9.20:5000/`+ (item.image)}}
              style={{
                width: 150,
                height: 150,
                borderRadius: 30,
                // marginTop: 10,
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
              {item.price} dh
            </Text>
          </TouchableOpacity>
        )}
        // keyExtractor={item => item.id}
        numColumns={2}
      />
    </View>
  );
}

export default Product;
