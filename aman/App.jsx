
import React, {useEffect, useState} from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from './components/Onboarding';
import Login from './pages/Login';
import Register from './pages/Register';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Home from './pages/Home';
import Shop from './pages/Shop';
import Order from './pages/Order';
import Person from './pages/User';
import Header from './components/Header';

const home = 'Home';
const shop = 'Shop';
const order = 'Order';
const person = 'User';
const Tab = createMaterialBottomTabNavigator();
const Stack = createNativeStackNavigator();

const App = () => {
  const [initializing, setInitializing] = useState();
  const [user, setUser] = useState();

  //handle user state changes
  function onAuthStateChanged(user) {
    setUser(user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    // const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    // return subscriber; // unsubscribe on unmount
  }, []);

  if (initializing) return null;

  if (!user) {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="Onboarding"
            component={Onboarding}
            options={{headerShown: false}}
          />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown: false}}
            // options={{
            //   headerTitle: () => <Header name="Login" />,
            //   headerStyle: {
            //     backgroundColor: '#112B54',
            //     height: 80,
            //     // borderBottomLeftRadius: 50,
            //     borderBottomRightRadius: 50,
            //     shadowColor: '#000',
            //     elevation: 25,
            //   },
            // }}
          />
          <Stack.Screen
            name="Register"
            component={Register}
            options={{headerShown: false}}

            // options={{
            //   headerTitle: () => <Header name="Register" />,
            //   headerStyle: {
            //     backgroundColor: '#112B54',
            //     height: 80,
            //     // borderBottomLeftRadius: 50,
            //     borderBottomRightRadius: 50,
            //     shadowColor: '#000',
            //     elevation: 25,
            //   },
            // }}
          />
          {/* <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown: false}}
            // options={{
            //   headerTitle: () => <Header name="Home" />,
            //   headerStyle: {
            //     backgroundColor: '#112B54',
            //     height: 80,
            //     // borderBottomLeftRadius: 50,
            //     borderBottomRightRadius: 50,
            //     shadowColor: '#000',
            //     elevation: 25,
            //   },
            // }}
          /> */}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }

  return <NavigationContainer>
    <Tab.Navigator
      initialRouteName={home}
      activeColor="#fff"
      inactiveColor="#fff"
      barStyle={{backgroundColor: '#112B54'}}
      shifting={true}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === home) {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === shop) {
            iconName = focused ? 'cart' : 'cart-outline';
          } else if (route.name === order) {
            iconName = focused ? 'list' : 'list-outline';
          } else if (route.name === person) {
            iconName = focused ? 'person' : 'person-outline';
          }
          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: '#112B54',
        inactiveTintColor: '#fff',
        labelStyle: {
          fontSize: 12,
          paddingBottom: 10,
        },
        style: {
          backgroundColor: '#112B54',
          borderTopLeftRadius: 50,
          borderTopRightRadius: 50,
          height: 70,
          shadowColor: '#000',
          elevation: 25,
        },
      }}
    >
      <Tab.Screen name={home} component={Home} />
      <Tab.Screen name={shop} component={Shop} />
      <Tab.Screen name={order} component={Order} />
      <Tab.Screen name={person} component={Person} />

    
      </Tab.Navigator>
  </NavigationContainer>;
};
export default App;
