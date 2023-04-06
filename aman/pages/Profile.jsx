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
import React, {useContext} from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CredentialsContext} from '../components/CredentialsContext';

const User = () => {
  const navigation = useNavigation();
  const {storedCredentials, setStoredCredentials} =
    useContext(CredentialsContext);
  // const {fullName} = storedCredentials;

  const handleLogout = () => {
    AsyncStorage.removeItem('token')
      .then(() => {
        setStoredCredentials(null);
        navigation.navigate('Auth');
      })
      .catch(error => console.log(error));
  };

  return (
    // <ScrollView
    //   showsVerticalScrollIndicator={false}
    //   style={{backgroundColor: '#F0F4F9', paddingHorizontal: 5}}>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //       alignItems: 'center',
    //       marginTop: 20,
    //       padding: 10,
    //     }}>
    //     <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //       <Icon
    //         name="person-circle-outline"
    //         size={50}
    //         color="#000"
    //         style={{marginRight: 10}}
    //       />
    //       <View style={{marginLeft: 10}}>
    //         <Text style={{fontSize: 18, fontWeight: 'bold'}}>{fullName}</Text>

    //       </View>
    //     </View>
    //     <Pressable onPress={handleLogout}>
    //       <Icon name="log-out-outline" size={30} color="#000" />
    //     </Pressable>
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //       alignItems: 'center',
    //       marginTop: 20,
    //       padding: 10,
    //     }}>
    //     <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //       <Icon
    //         name="mail-outline"
    //         size={50}
    //         color="#000"
    //         style={{marginRight: 10}}
    //       />
    //       <View style={{marginLeft: 10}}>
    //         <Text style={{fontSize: 18, fontWeight: 'bold'}}>Email</Text>
    //         <Text style={{fontSize: 15, color: '#000'}}>Email</Text>
    //       </View>
    //     </View>
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //       alignItems: 'center',
    //       marginTop: 20,
    //       padding: 10,
    //     }}>
    //     <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //       <Icon
    //         name="call-outline"
    //         size={50}
    //         color="#000"
    //         style={{marginRight: 10}}
    //       />
    //       <View style={{marginLeft: 10}}>
    //         <Text style={{fontSize: 18, fontWeight: 'bold'}}>Phone</Text>
    //         <Text style={{fontSize: 15, color: '#000'}}>Phone</Text>
    //       </View>
    //     </View>
    //   </View>
    //   <View
    //     style={{
    //       flexDirection: 'row',
    //       justifyContent: 'space-between',
    //       alignItems: 'center',
    //       marginTop: 20,
    //       padding: 10,
    //     }}>
    //     <View style={{flexDirection: 'row', alignItems: 'center'}}>
    //       <Icon
    //         name="location-outline"
    //         size={50}
    //         color="#000"
    //         style={{marginRight: 10}}
    //       />
    //       <View style={{marginLeft: 10}}>
    //         <Text style={{fontSize: 18, fontWeight: 'bold'}}>Address</Text>
    //         <Text style={{fontSize: 15, color: '#000'}}>Address</Text>
    //       </View>
    //     </View>
    //   </View>
    // </ScrollView>

    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F0F4F9',
        flexDirection: 'column',
        justifyContent: 'flex-start',
      }}>
        <Pressable
            onPress={() => navigation.navigate("App",
            {screen: "Adress"})}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          padding: 10,
          width: '95%',
          height: 70,
          backgroundColor: '#fff',
          flex: 0,
          borderRadius: 10,
          borderColor: 'gray',
          borderWidth: 0.5,
        }}>
        <View
          style={{
            width: 40,
            height: 40,
            backgroundColor: '#112B54',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            // marginLeft: 10,
          }}>
          <Icon
            name="location-outline"
            size={25}
            color="#fff"
            // style={{marginRight: 10}}
          />
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 10}}>
          Address
        </Text>
      </View>
      </Pressable>
      <Pressable
          onPress={handleLogout}
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
      <View
        style={{
          flexDirection: 'row',
          // justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: 20,
          padding: 10,
          width: '95%',
          height: 70,
          backgroundColor: '#FCF3F4',
          flex: 0,
          borderRadius: 10,
          borderColor: '#BC3131',
          borderWidth: 0.5,
        }}>
       
          <View
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#BC3131',
              borderRadius: 10,
              justifyContent: 'center',
              alignItems: 'center',
              // marginLeft: 10,
            }}>
            <Icon
              name="log-out-outline"
              size={25}
              color="#fff"
              // style={{marginRight: 10}}
            />
          </View>
        
        <Text
          style={{
            fontSize: 18,
            fontWeight: 'bold',
            marginLeft: 10,
            color: '#BC3131',
          }}>
          Logout
        </Text>
      </View>
      </Pressable>
    </View>
  );
};

export default User;
