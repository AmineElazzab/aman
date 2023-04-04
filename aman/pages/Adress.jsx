import {View, Text, TextInput, Pressable, Image} from 'react-native';
import React, {useContext, useState} from 'react';
import {CredentialsContext} from '../components/CredentialsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {addAddress} from '../utils/api';
import {useMutation} from 'react-query';
import Directions from '../assets/img/Directions.png'


const Adress = () => {
  const navigation = useNavigation();
  const [address, setAddress] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [zip, setZip] = useState('');

  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

  const {mutate, isLoading} = useMutation(addAddress, {
    onSuccess: data => {
      persisLogin(data);
      navigation.navigate('Home');
      console.log(data)
    },
    onError: error => {
      Alert.alert('Error', error.response.data.message);
    },
    isLoading: setTimeout(() => {
      return isLoading;
    }, 1000),
  });


  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 20}}>
        Add Address
      </Text>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Image source={Directions} style={{width: 200, height: 200}} />
        </View>
        </View>
  );
};

export default Adress;
