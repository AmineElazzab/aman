import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  Image,
  Alert,
  Pressable
} from 'react-native';
import React, {useContext, useState} from 'react';
import m from '../assets/img/login.jpg';
import {Login} from '../utils/api';
import {useMutation} from 'react-query';
import {CredentialsContext} from '../components/CredentialsContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Icon from 'react-native-vector-icons/Ionicons';


export default function LoginSecrin({navigation}) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {storedCredentials, setStoredCredentials} = useContext(CredentialsContext);

  const {mutate, isLoadig} = useMutation(Login, {
    onSuccess: data => {
      persisLogin(data);
      console.log(data)
      navigation.navigate('Nav',
      {
        screen: 'Home',
        });
    },
    onError: error => {
      Alert.alert('Error', error.response.data.message);
    },
    isLoadig: setTimeout(() => {
      return isLoadig;
    }, 1000),
  });

  const persisLogin = async data => {
    AsyncStorage.setItem('token', (data.token))
    // AsyncStorage.setItem('fullName',(data.fullname))
      .then(() => {
        setStoredCredentials(data.token);
        // setStoredCredentials(data.fullname);
        // console.log(storedCredentials);
      })
      .catch(error => {
        console.error(error);
      });
  };
  // const persistLogin = async data => {
  //   await AsyncStorage.multiSet([
  //     ['token', data.token],
  //     ['fullName', data.result.name],
  //     ['userId', data.result._id],
  //   ])
  //     .then(() => {
  //       setStoredCredentials(data.token, data.result.name, data.result._id);
  //       // navigation.navigate('Nav', {screen: 'Home'});
  //     })
  //     .catch(error => {
  //       console.error(error);
  //     });
  // };


  return (
    <View style={styles.container}>
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
          Login
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
            maxWidth: '60%',
          }}>
          Welcome Back you've been missed!
        </Text>
      </View>
      <Image
        source={m}
        style={{
          width: 350,
          height: 350,
        }}
      />
      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#aaaaaa"
        onChangeText={email => setEmail(email)}
        value={email}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <TextInput
        style={styles.input}
        placeholderTextColor="#aaaaaa"
        secureTextEntry
        placeholder="Password"
        onChangeText={password => setPassword(password)}
        value={password}
        underlineColorAndroid="transparent"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <Pressable
        onPress={() => mutate({email, password})}
        style={styles.button}>
        <Icon
          name="finger-print-outline"
          size={30}
          color="white"
          style={{marginRight: 10}}

        />
      </Pressable>
      <View style={styles.footerView}>
        <Text style={styles.footerText}>
          Don't have an account?{' '}
          <Text
            onPress={() => navigation.navigate('Register')}
            style={styles.footerLink}>
            Sign up
          </Text>
        </Text>
        {/* <Text
                    onPress={() => onResetPasswordPress()} style={styles.footerLink}>Forgot Password?</Text> */}
      </View>
    </View>
  );
}

// const onLoginPress = () => {
//     setLoading(true)
//     firebase.auth().signInWithEmailAndPassword(email, password)
//         .then((response) => {
//             const uid = response.user.uid
//             const usersRef = firebase.firestore().collection('users')
//             usersRef
//                 .doc(uid)
//                 .get()
//                 .then(firestoreDocument => {
//                     if (!firestoreDocument.exists) {
//                         alert("User does not exist anymore.")
//                         return;
//                     }
//                     const user = firestoreDocument.data()
//                     navigation.navigate('Dashboard', {user})
//                 })
//                 .catch(error => {
//                     alert(error)
//                 });
//         })
//         .catch(error => {
//             alert(error)
//         })
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 30,
  },
  input: {
    height: 50,
    width: 350,
    borderRadius: 10,
    overflow: 'hidden',
    backgroundColor: '#F0F0F0',
    marginBottom: 10,
    padding: 15,
  },
  button: {
    backgroundColor: '#112B54',
    width: 350,
    height: 50,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    shadowColor: '#112B54',
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10,
  },
  buttonTitle: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  footerView: {
    flex: 1,
    alignItems: 'center',
    marginTop: 20,
  },
  footerText: {
    fontSize: 16,
    color: 'black',
  },
  footerLink: {
    color: '#112B54',
    fontWeight: 'bold',
    fontSize: 16,
    shadowColor: '#000',
    elevation: 50,
  },
});
