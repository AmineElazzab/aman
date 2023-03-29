import { View, Text } from 'react-native'
import React, { useContext } from 'react';
import {CredentialsContext} from '../components/CredentialsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';


const Adress = () => {
  const {storedCredentials, setStoredCredentials} =
    useContext(CredentialsContext);
    const navigation = useNavigation();


  return (
    <View>
      <Text>Adress</Text>
    </View>
  )
}

export default Adress