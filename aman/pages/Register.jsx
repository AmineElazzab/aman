import {
  View,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import m from '../assets/img/login.jpg';
import Header from '../components/Header';
import { SafeAreaView } from 'react-native-safe-area-context';

const Register = () => {
  const navigation = useNavigation();
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [adress, setAdress] = useState('');
  const [city, serCity] = useState('');
  return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#fff',
          padding: 20,
        }}>
        <View
          style={{
            marginLeft: 10,
          }}>
          <Text
            style={{
              color: '#112B54',
              fontSize: 30,
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
            }}>
            Create account
          </Text>
          <Text
            style={{
              color: 'black',
              fontSize: 15,
              fontWeight: 'bold',
              justifyContent: 'center',
              alignItems: 'center',
              textAlign: 'center',
              marginTop: 15,
              maxWidth: '70%',
              marginBottom: 20,
            }}>
            Create an account so you can start ordering your favorite water
          </Text>
        </View>
        {/* <Image
        source={m}
        style={{
          width: 350,
          height: 350,
        }}
     /> */}
        <TextInput
          style={{
            height: 50,
            width: 350,
            backgroundColor: '#eaeaea',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}
          placeholder="Full Name"
          placeholderTextColor="#aaaaaa"
          onChangeText={fullName => setFullName(fullName)}
          value={fullName}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={{
            height: 50,
            width: 350,
            backgroundColor: '#eaeaea',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}
          placeholder="Email"
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          onChangeText={email => setEmail(email)}
          value={email}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={{
            height: 50,
            width: 350,
            backgroundColor: '#eaeaea',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}
          placeholder="Password"
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          onChangeText={password => setPassword(password)}
          value={password}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={{
            height: 50,
            width: 350,
            backgroundColor: '#eaeaea',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}
          placeholder="Adress"
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          onChangeText={adress => setAdress(adress)}
          value={adress}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <TextInput
          style={{
            height: 50,
            width: 350,
            backgroundColor: '#eaeaea',
            borderRadius: 10,
            padding: 10,
            marginTop: 10,
          }}
          placeholder="City"
          placeholderTextColor="#aaaaaa"
          secureTextEntry
          onChangeText={city => serCity(city)}
          value={city}
          underlineColorAndroid="transparent"
          autoCapitalize="none"
          autoCorrect={false}
        />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
          }}>
          <Text
            style={{
              color: '#000',
              fontSize: 16,
            }}>
            Already have an account?
          </Text>
          <Text
            onPress={() => navigation.navigate('Login')}
            style={{
              color: '#112B54',
              fontSize: 16,
              fontWeight: 'bold',
            }}>
            {' '}
            Login
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
          style={{
            height: 50,
            width: 350,
            backgroundColor: '#112B54',
            borderRadius: 10,
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 20,
            shadowColor: '#112B54',
            shadowOffset: {
              width: 0,
              height: 5,
            },
            shadowOpacity: 0.34,
            shadowRadius: 6.27,
            elevation: 10,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 16,
            }}>
            Register
          </Text>
        </TouchableOpacity>
      </View>
  );
};

export default Register;
