import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  RefreshControl,
  Button,
  Pressable,
} from 'react-native';
import React, {useCallback, useState, useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import Category from '../components/Category';
import Product from '../components/Product';
import {CredentialsContext} from '../components/CredentialsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import home from '../assets/img/home.png';

//get user fullName

const Home = () => {
  // const {fullName} = storedCredentials;
  const [refreshing, setRefreshing] = useState(false);
  const {storedCredentials, setStoredCredentials} =
    useContext(CredentialsContext);
  const navigation = useNavigation();

  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  //logout
  const handleLogout = () => {
    AsyncStorage.removeItem('token')
      .then(() => {
        setStoredCredentials(null);
        navigation.navigate('Auth');
      })
      .catch(error => console.log(error));
  };

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
      showsVerticalScrollIndicator={false}
      style={{backgroundColor: '#F0F4F9', paddingHorizontal: 5}}>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginTop: 20,
          padding: 10,
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{width: '50%'}}>
          <Text style={{fontSize: 17, color: '#000'}}>Hello,</Text>
        </View>
        {/* {setStoredCredentials
          ? <View style={{width: '50%', alignItems: 'flex-end'}}>
              <Pressable onPress={handleLogout}>
                <Text style={{fontSize: 17, color: '#000'}}>Logout</Text>
              </Pressable>
            </View>
          : null

        } */}
        {/* <View
          style={{
            alignItems: 'flex-end',
            backgroundColor: '#112B54',
            width: 100,
            height: 30,
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
         
            <Pressable onPress={handleLogout}
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}
            >
              <Text
                style={{
                  color: '#fff',
                  fontSize: 15,
                  marginRight: 5,
                }}
              >
                Logout
              </Text> 
                <Icon name="ios-exit-outline" size={20} color="#fff" />
            </Pressable>
          
        </View> */}
      </View>
      <View
        style={{
          width: '100%',
          flexDirection: 'row',
          height: 130,
          alignItems: 'center',
          // backgroundColor: '#fff',
          borderRadius: 10,
          marginTop: 10,
        }}>
        <View
          style={{
            width: '40%',
            alignItems: 'center',
            justifyContent: 'center',
            marginLeft: 20,
          }}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: 'bold',
              color: '#000',
            }}>
            Find your favorite water
          </Text>
        </View>
        <View style={{width: '60%', alignItems: 'center'}}>
          <Image source={home} style={{width: 160, height: '100%'}} />
        </View>
      </View>
      {/* <View
        style={{
          flexDirection: 'row',
          width: '100%',
          marginVertical: 30,
          alignItems: 'center',
          paddingHorizontalF: 5,
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            elevation: 2,
            backgroundColor: '#fff',
            width: '83%',
            height: 35,
            paddingHorizontal: 20,
            borderRadius: 10,
            marginLeft: 1,
            height: 40,
          }}>
          <Icon name="search" size={25} color="#112B54" />
          <TextInput
            placeholder="Search"
            style={{
              fontSize: 14,
              paddingHorizontal: 10,
            }}
          />
        </View>

        <View
          style={{
            alignItems: 'center',
            elevation: 2,
            backgroundColor: '#112B54',
            width: '15%',
            height: 40,
            marginLeft: 5,
            borderRadius: 10,
            justifyContent: 'center',
          }}>
          <Icon
            name="ios-filter"
            size={20}
            color="#fff"
            style={{alignSelf: 'center'}}
          />
        </View>
      </View> */}
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View
          style={{
            marginLeft: 10,
            alignItems: 'center',
          }}>
          <Text
            style={{
              fontSize: 17,
              fontWeight: 'bold',
              color: '#000',
              marginBottom: 10,
            }}>
            Categories
          </Text>
        </View>
        <View
          style={{
            alignItems: 'center',
            flexDirection: 'row',
          }}>
          <Text
            style={{
              marginRight: 10,
            }}>
            See All
          </Text>
          <Icon
            name="ios-arrow-forward-circle-outline"
            size={15}
            color="#112B54"
          />
        </View>
      </View>
      <View>
        <Category />
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginTop: 30,
          marginBottom: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: 20,
            fontWeight: 'bold',
            color: '#000',
          }}>
          All Product
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          width: '100%',
          alignItems: 'center',
          paddingHorizontal: 5,
          justifyContent: 'space-between',
          marginBottom:50
        }}>
        <Product />
      </View>
    </ScrollView>
  );
};

export default Home;
