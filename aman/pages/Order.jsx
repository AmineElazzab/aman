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
import Icon from 'react-native-vector-icons/Ionicons';
import { useNavigation } from '@react-navigation/native';
import EmptyOrder from '../components/EmptyOrder';
import {useQuery} from 'react-query';
import {getOrderByUserId} from '../utils/api'

const Order = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigation = useNavigation();

  const {data, isLoading, error, refetch} = useQuery(
    'order',
    () => getOrderByUserId(),
    {
      onSuccess: data => {
        setOrders(data);
       console.log(data)
      },
    },
  );
  
  useEffect(() => {
    refetch();
  }, []);

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }
  , []);

  return (
    // <View style={{flex: 1}}>
      <View style={{flex: 1}}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: 10,
            backgroundColor: '#fff',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-back" size={25} />
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>My Orders</Text>
          <View />

        </View>
        <View style={{flex: 1}}>
          {orders.length === 0 ? (
            <EmptyOrder />
          ) : (
            <FlatList
              data={orders}
              keyExtractor={item => item._id}
              renderItem={({item}) => (
                <View
                style={{
                  flexDirection: 'column',
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
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 12, fontWeight: 'bold'}}>
                      Order Id: {item._id}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'column',
                      // justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      {item.createdAt}
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    ${item.product?.price}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginLeft:20
                    }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      {item.user?.address}
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                    {item.user?.city}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      // justifyContent: 'space-between',
                      alignItems: 'center',
                    }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      {item.user?.email}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',    
                    }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      {item.user?.name}
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      {item.user?.userId}
                    </Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      {item.cartId}
                    </Text>
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                      {item.totalPrice}
                    </Text>
                  </View>
                </View>
              )}
              refreshControl={  
                <RefreshControl
                  refreshing={refreshing}
                  onRefresh={onRefresh}
                />
              }
            />
          )}
        </View>
      </View>
    // </View>

  );
};

  
  


export default Order