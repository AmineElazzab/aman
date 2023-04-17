import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  RefreshControl,
  Button,
  Pressable,
  TouchableOpacity
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
   <>
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
      style={{color:"#fff"}}
      />
    </TouchableOpacity>
    <Text style={{fontSize: 20, fontWeight: 'bold', color:"#fff"}}>Profil</Text>
    <View />

  </View>
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
            {screen: "TaP"})}
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
            name="newspaper-outline"
            size={25}
            color="#fff"
            // style={{marginRight: 10}}
          />
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 10}}>
          Terms and Policy
        </Text>
      </View>
      </Pressable>
      <Pressable
            onPress={() => navigation.navigate("App",
            {screen: "About"})}
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
            name="alert-circle-outline"
            size={25}
            color="#fff"
            // style={{marginRight: 10}}
          />
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 10}}>
         About
        </Text>
      </View>
      </Pressable>
      <Pressable
            onPress={() => navigation.navigate("App",
            {screen: "Contact"})}
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
            name="call-outline"
            size={25}
            color="#fff"
            // style={{marginRight: 10}}
          />
        </View>
        <Text style={{fontSize: 18, fontWeight: 'bold', marginLeft: 10}}>
         Contact
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
    </>
  );
};

export default User;
