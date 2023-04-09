import React, {useState} from 'react';
import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import {GetProductById} from '../utils/api';
import {useQuery} from 'react-query';
import {useNavigation} from '@react-navigation/native';
import {addToCart} from '../utils/api';

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
        console.log(data);
      },
    },
  );

  if (isLoading) {
    return <Text>Loading...</Text>;
  }
  if (error) {
    return <Text>Error: {error.message}</Text>;
  }

  //add to cart by product id
  const handleAddToCart = async () => {
    const dataa = await addToCart(productId);
    console.log(dataa);
    navigation.navigate('Cart');
  };
  
  //quantity
  // const [quantity, setQuantity] = useState(1);
  // const handleIncrement = () => {
  //   setQuantity(quantity + 1);
  // };
  // const handleDecrement = () => {
  //   if (quantity > 1) {
  //     setQuantity(quantity - 1);
  //   }
  // };



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
              source={{uri: `http://192.168.9.20:5000/`+ (product?.image)}}
              style={{
                width: 150,
                height: 150,
                borderRadius: 30,
                // marginTop: 10,
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
          
            {/* <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            width: '100%',
            marginBottom: 10,
          }}>
          <Text
            style={{
              fontWeight: 'bold',
              fontSize: 20,
              color: '#000',
              textAlign: 'center',
              justifyContent: 'center',
            }}>
            Quantity
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '30%',
            }}>
            <TouchableOpacity onPress={handleDecrement}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#000',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}>
                -
              </Text>
            </TouchableOpacity>
            <Text
              style={{
                fontWeight: 'bold',
                fontSize: 20,
                color: '#000',
                textAlign: 'center',
                justifyContent: 'center',
              }}>
              {quantity}
            </Text>
            <TouchableOpacity onPress={handleIncrement}>
              <Text
                style={{
                  fontWeight: 'bold',
                  fontSize: 20,
                  color: '#000',
                  textAlign: 'center',
                  justifyContent: 'center',
                }}>
                +
              </Text>
            </TouchableOpacity>
          </View>
        </View> */}
          
        <TouchableOpacity
          onPress={handleAddToCart}
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
