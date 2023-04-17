import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl,
  ToastAndroid
} from 'react-native';
import {useQuery , useMutation} from 'react-query';
import {useNavigation} from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Ionicons';
import {getCartItems , addOrder} from '../utils/api';
import EmptyCart from '../components/EmptyCart';
// import Chekout from '../components/Chekout';


  //get cart
  const Cart = ({route}) => {
  //   if (!route || !route.params) {
  //     return null; // or show an error message
  //   }
  // const {cartId} = route.params;
  const [refreshing, setRefreshing] = useState(false);
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
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
  const calculateTotalPrice = useCallback(() => {
    let totalPrice = 0;
    cart.forEach(item => {
      totalPrice += item.product?.price;
    });
    setTotalPrice(totalPrice);
  }, [cart]);

  useEffect(() => {
    calculateTotalPrice();
  }, [cart, calculateTotalPrice]);

 
  // DeleteCartItem
  const DeleteCartItem = id => {
    fetch(`http://192.168.9.20:5000/api/cart/deleteCartItem/${id}`, {
      method: 'DELETE',
    })
      .then(res => res.json())
      .then(result => {
        const remaining = cart.filter(item => item._id !== result._id);
        setCart(remaining);
        console.log(
          // 'DeleteCartItem',
          result,
        );
      })
      .catch(err => {
        console.log(err);
      });
  };

  //add order
const handleAddToOrder = async () => {
    try {
      const data = await addOrder();

      console.log(data);
      ToastAndroid.show('Order Placed', ToastAndroid.SHORT);
      navigation.navigate('Order');
    } catch (error) {
      console.log(error);
    }
}


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
            color="#fff"
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold', color:"#fff"}}>My Cart</Text>
          <View />

        </View>
      {cart?.length > 0 ? (
        cart.map((item , i) => (
          <>
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
                source={{
                  uri: `http://192.168.9.20:5000/` + item.product?.image,
                }}
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
                    color: '#000',
                  }}>
                  {item.product?.name}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#00b894',
                  }}>
                  ${item.product?.price}
                </Text>
                <Text
                  style={{
                    fontSize: 16,
                    fontWeight: 'bold',
                    color: '#636e72',
                  }}>
                  {item.product?.description}
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <TouchableOpacity
                  onPress={() => {
                    //DeleteCartItem
                    DeleteCartItem(item._id);
                  }}>
                  <Icon name="trash" size={30} color="#d63031" />
                </TouchableOpacity>
              </View>
            </View>
         
         {
          
          (i === cart.length - 1) ?
          <View style={{alignItems: 'center'}}>
          <Text style={{fontSize: 24, fontWeight: 'bold'}}>
            Total Price: ${totalPrice.toFixed(2)}
          </Text>
          <TouchableOpacity
            style={{
              backgroundColor: '#00b894',
              paddingVertical: 10,
              paddingHorizontal: 20,
              borderRadius: 10,
              marginTop: 10,
            }}
            onPress={() => {
              handleAddToOrder()
            }
            }>
            <Text style={{color: '#fff', fontSize: 18}}>Checkout</Text>
          </TouchableOpacity>
        </View>
        :null
         }
           
          </>
        ))
      ) : (
        <EmptyCart />
      )}
    </ScrollView>

  );
};

export default Cart;
