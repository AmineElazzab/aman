import React, {useContext} from 'react';
import {CredentialsContext} from './../components/CredentialsContext';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Home from '../pages/Home';
import Profile from '../pages/Profile';
import Cart from '../pages/Cart';
import Order from '../pages/Order';
import Shop from '../pages/Shop';
import Auth from '../navigations/Auth';

import {View, KeyboardAvoidingView, Platform} from 'react-native';

const Tab = createBottomTabNavigator();

const Tabs = () => {
  const {storedCredentials, setStoredCredentials} =
    useContext(CredentialsContext);

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : null}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 64 : 0}
      style={{flex: 1}}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused}) => {
            let iconName;
            if (route.name === 'Home') {
              iconName = focused ? 'home' : 'home-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Cart') {
              iconName = focused ? 'ios-cart' : 'ios-cart-outline';
            } else if (route.name === 'Order') {
              iconName = focused ? 'reader' : 'reader-outline';
            } else if (route.name === 'Shop') {
              iconName = focused ? 'md-grid' : 'md-grid-outline';
            }
            return (
              <View
                style={{
                  width: 30,
                  height: 30,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <View
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 40,
                    backgroundColor: focused ? '#fff' : 'transparent',
                  }}>
                  <Icon
                    name={iconName}
                    size={25}
                    color={focused ? '#112B54' : 'white'}
                    style={{
                      marginTop: 5,
                      marginLeft: 7,
                    }}
                  />
                  {focused && (
                    <View
                      style={{
                        backgroundColor: '#fff',
                      }}
                    />
                  )}
                </View>
              </View>
            );
          },
          tabBarActiveTintColor: '#20B08E',
          tabBarInactiveTintColor: 'black',
          tabBarStyle: {
            display: 'flex',
            height: 45,
            backgroundColor: '#112B54',
            borderTopLeftRadius: 35,
            borderTopRightRadius: 35,
            justifyContent: 'center',
            alignItems: 'center',
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            elevation: 0,
          },
          tabBarShowLabel: false,
        })}>
        <Tab.Screen
          name="Cart"
          component={Cart}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#112B54',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name="Order"
          component={Order}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#112B54',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        <Tab.Screen
          name="Home"
          component={Home}
          options={{headerShown: false}}
        />
        <Tab.Screen
          name="Shop"
          component={Shop}
          options={{headerShown: true}}
        />
        <Tab.Screen
          name="Profile"
          component={Profile}
          options={{
            headerShown: true,
            headerStyle: {
              backgroundColor: '#112B54',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          }}
        />
        {!storedCredentials && (
          <Tab.Screen
            name="Login"
            component={Auth}
            options={{headerShown: false}}
          />
        )}
      </Tab.Navigator>
    </KeyboardAvoidingView>
  );
};

export default Tabs;
