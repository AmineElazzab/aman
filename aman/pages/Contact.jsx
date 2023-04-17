import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl,
  ToastAndroid,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';


const Contact = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
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
          <Icon name="arrow-back" size={25} color="#fff" />
        </TouchableOpacity>
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#fff'}}>
          {' '}
          Contact us{' '}
        </Text>
        <View />
      </View>
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
        <Icon
          name="mail"
          size={100}
          color="#112B54"
          style={{marginBottom: 20}}
        />
        <Text style={{fontSize: 20, fontWeight: 'bold', color: '#112B54'}}>
          {' '}
          Contact us{' '}
        </Text>
        <Text style={{fontSize: 15, color: '#112B54'}}>
          {' '}
          Email:
          <Text style={{fontSize: 15, color: '#112B54', fontWeight: 'bold'}}>
            ma.elazzab@gmail.com
</Text>
        </Text>
        <Text style={{fontSize: 15, color: '#112B54'}}>
          {' '}
          Phone:
          <Text style={{fontSize: 15, color: '#112B54', fontWeight: 'bold'}}>
           +212613872479
          </Text>
        </Text>

        <Text style={{fontSize: 15, color: '#112B54'}}>
          {' '}
          Address:
          <Text style={{fontSize: 15, color: '#112B54', fontWeight: 'bold'}}>
            Hay Mohammadi, Safi
          </Text>
        </Text>

  </View>
  </View>
  )
}

export default Contact