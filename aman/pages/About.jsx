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

const About = () => {
  const navigation = useNavigation();
  const [refreshing, setRefreshing] = React.useState(false);

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
            <Icon name="arrow-back" size={25} 
            color="#fff"
            />
          </TouchableOpacity>
          <Text style={{fontSize: 20, fontWeight: 'bold', color:"#fff"}}>About</Text>
          <View />

        </View>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={() => {
              setRefreshing(true);
              setTimeout(() => {
                setRefreshing(false);
              }, 2000);
            }}
          />
        }>
        <View
          style={{
            flex: 1,
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Icon
            name="information-circle-outline"
            size={100}
            color="#112B54"
            style={{marginTop: 20}}
          />
          <Text
            style={{
              fontSize: 16,
              fontWeight: 'bold',
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            About
          </Text>
          <Text
            style={{
              fontSize: 14,
              marginTop: 10,
              textAlign: 'justify',
              color: '#000',
            }}>
            Aman is a mobile application that enables users to order water
            delivery directly to their home or office. The app is designed to be
            easy to use and easy to navigate, allowing users to place an order
            for water quickly and easily. It is available for download on both
            Android and iOS devices. To use the security app, users can create
            an account and add their delivery address. They can then go through
            the selection of available water types and sizes, select the
            quantity they want to order, and schedule delivery. Payment can be
            made directly upon delivery. The Aman app also offers features such
            as the ability to save frequently ordered items for easy reordering,
            as well as the option to subscribe to regular water deliveries on a
            recurring schedule. Overall, Aman app is designed to make ordering a
            water delivery as easy and convenient as possible, providing a
            reliable and hassle-free service to the users.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default About;
