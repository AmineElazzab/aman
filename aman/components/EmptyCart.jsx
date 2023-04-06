import {View, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import React from 'react'
import Icon from 'react-native-vector-icons/Ionicons';
import {useNavigation} from '@react-navigation/native';


const EmptyCart = () => {
  const navigation = useNavigation();
  return (
    <View
    style={{
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      // backgroundColor: "#fff",
      // marginBottom: 30,
      height:'100%',
      marginTop:200

    }}
  >
    <View>
    <Icon
      name="cart"
      size={150}
      color="#112B54"
    />
    </View>
    <View>
    <Text
      style={{
        fontSize: 20,
        fontWeight: "bold",
        color: "#000",
      }}
    >
      Your cart is empty
    </Text>
    <Text
      style={{
        fontSize: 16,
        color: "#000",
      }}
    >
      Add items to it now
    </Text>
    </View>
    <View
      style={{  
        marginTop: 20,
        width: 300,
        height: 50,
        borderRadius: 5,
        backgroundColor: "#fff",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <TouchableOpacity
        onPress={() => navigation.navigate("Shop")}
        style={{
          width: 300,
          height: 50,
          borderRadius: 5,
          backgroundColor: "#112B54",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 20,
            fontWeight: "bold",
          }}
        >
          Shop Now
        </Text>
      </TouchableOpacity>
      </View>
  </View>
  )
}

export default EmptyCart