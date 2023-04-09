import {View, Text, TextInput, Pressable, Image, Alert} from 'react-native';
import React, {useContext, useState} from 'react';
import {CredentialsContext} from '../components/CredentialsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
// import {addAddress} from '../utils/api';
// import {useMutation} from 'react-query';
import Directions from '../assets/img/Directions.png'
import {useQuery} from 'react-query';
import {getUserById} from '../utils/api';
// import Icon from 'react-native-paper/lib/typescript/components/Icon';

const Adress = () => {
  const {storedCredentials, setStoredCredentials} = useContext(
    CredentialsContext,
  );

  //get getUserById
  const {data, isLoading, error} = useQuery(
    ['getUserById', storedCredentials.id],
    () => getUserById(storedCredentials.id),
  );

  const navigation = useNavigation();
    
    

 

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',

      }}
    >
<Image
        style={{width: 300, height: 300, marginTop: 20}}
        source={Directions}
      />
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        Your Address
      </Text>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 20}}>
        {data?.address}
      </Text>
      <Pressable
        style={{  
          backgroundColor: '#FF6347',
          width: 200,
          height: 50,
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 10,
          marginTop: 20,
        }}
        onPress={() => navigation.navigate('EditAddress')}
      >
        <Text style={{color: 'white', fontSize: 20}}>Edit Address</Text>
      </Pressable>
        
   </View>
  );
};

export default Adress;
