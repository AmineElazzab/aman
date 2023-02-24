import { StyleSheet, Text, View } from "react-native";
import React from "react";
import Background from "../components/Background";
import Button from "../components/Button";

const Landing = (props) => {
  return (
    <Background>
      <View
        style={{
          marginHorizontal: 40,
          marginVertical: 100,
        }}
      >
        <Text
          style={{
            fontSize: 40,
            color: "white",
            // textAlign: "center",
          }}
        >
          Welcome to Aman
        </Text>
        <Text
          style={{
            fontSize: 20,
            color: "white",
            textAlign: "center",
          }}
        >
          Aman is a platform that connects you with your friends and family
        </Text>
        <Button
          bgColor="#FFC107"
          btnLabel="Login"
          textColor="black"
          Press={() => props.navigation.navigate("Login")}
        />
        <Button
          bgColor="#fff"
          btnLabel="Sign Up"
          textColor="black"
          Press={() => props.navigation.navigate("Register")}
        />
      </View>
    </Background>
  );
};

export default Landing;

const styles = StyleSheet.create({});
