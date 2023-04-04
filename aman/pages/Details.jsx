import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {GetProductById} from '../utils/api';
import {useQuery} from 'react-query';
import {useNavigation} from '@react-navigation/native';

const Details = ({route}) => {
  const {productId} = route.params;
  const [product, setProduct] = useState(null);
  const navigation = useNavigation();

  const {data, isLoading, error} = useQuery(
    'product',
    () => GetProductById(productId),
    {
      onSuccess: data => {
        setProduct(data);
        // console.log(data)
      },
    },
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  return (
    <ScrollView
      style={{
        flex: 1,
        backgroundColor: '#FFF',
      }}
      showsVerticalScrollIndicator={false}>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#FFF',
          //   marginHorizontal: 10,
          //   marginTop: 10,
          margin: 10,
        }}>
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLDGIy5xG5Usvoc2b2gJlKMbVaq37tyfvWA&usqp=CAU',
          }}
          style={{
            width: 400,
            height: 500,
            resizeMode: 'stretch',
          }}
        />
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#FFF',
          marginHorizontal: 10,
          marginTop: 10,
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            // fontWeight: 'bold',
            fontSize: 14,
            color: 'gray',
            textAlign: 'center',
            justifyContent: 'center',
          }}>
          {/* {product.category.name} */}
          {product?.category?.name}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'flex-start',
          backgroundColor: '#FFF',
          marginHorizontal: 10,
          marginTop: 10,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000',
            textAlign: 'center',
            justifyContent: 'center',
          }}>
          {product?.name}
        </Text>
        <Text
          style={{
            fontWeight: 'bold',
            fontSize: 20,
            color: '#000',
            textAlign: 'center',
            justifyContent: 'center',
          }}>
          {product?.price}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          // backgroundColor: '#000',
          marginHorizontal: 10,
          marginTop: 100,
          flexDirection: 'column',
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Nav', {
              screen: 'Cart',
              params: {id: product.id},
            })
          }
          style={{
            backgroundColor: '#000',
            height: 50,
            width: '100%',
            elevation: 2,
            borderRadius: 30,
            // padding: 15,
            marginRight: 10,
            marginLeft: 2,
            marginBottom: 10,
          }}>
          <Text
            style={{
              color: '#FFF',
              textAlign: 'center',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            Add to Cart
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default Details;
