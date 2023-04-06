import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl,
} from 'react-native';
import {useQuery} from 'react-query';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getCartItems} from '../utils/api';
import EmptyCart from '../components/EmptyCart';

const Cart = () => {
  //get cart
  const [refreshing, setRefreshing] = useState(false);
  const [cart, setCart] = useState([]);
  const navigation = useNavigation();

  const {data, isLoading, error, refetch} = useQuery(
    'cart',
    () => getCartItems(),
    {
      onSuccess: data => {
        setCart(data);
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

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      refetch();
    });
    return unsubscribe;
  }, [navigation]);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  

  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={onRefresh}
          colors={['#000']}
          tintColor={'#000'}
        />
      }
      style={{
        flex: 1,
        marginBottom: 40,
      }}>
      {cart?.length > 0 ? (
        cart.map(item => (
          <View
            key={item._id}
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 10,
              backgroundColor: '#fff',
              marginVertical: 5,
            }}>
            <Image
              source={{uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdLDGIy5xG5Usvoc2b2gJlKMbVaq37tyfvWA&usqp=CAU'}}
              style={{
                width: 100,
                height: 100,
                borderRadius: 10,
              }}
            />
            <View
              style={{
                flex: 1,
                marginHorizontal: 10,
              }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  color: '#000'
                }}>
                {item.product.name}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#00b894',
                }}>
                ${item.product.price}
              </Text>
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: 'bold',
                  color: '#636e72',
                }}>
                {item.product.description}
              </Text>
            </View>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#00b894',
                  borderRadius: 10,
                }}>
                <Icon name="add" size={30} color="#fff" />
              </TouchableOpacity>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: 'bold',
                  marginVertical: 5,
                }}>
                {item.quantity}
              </Text>
              <TouchableOpacity
                style={{
                  width: 40,
                  height: 40,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor: '#00b894',
                  borderRadius: 10,
                }}>
                <Icon name="remove" size={30} color="#fff" />
              </TouchableOpacity>
            </View>
          </View>
        ))
      ) : (
        <EmptyCart />
      )}
    </ScrollView>
  );
};

export default Cart;
