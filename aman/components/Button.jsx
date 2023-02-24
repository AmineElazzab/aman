import { View, Text, TouchableOpacity } from "react-native";
import React from "react";

export default function Button({ bgColor, btnLabel, textColor, Press }) {
  return (
    <TouchableOpacity
      onPress={Press}
      style={{
        backgroundColor: bgColor,
        height: 40,
        width: 300,
        borderRadius: 30,
        justifyContent: "center",
        alignItems: "center",
        marginVertical: 10,
      }}
    >
      <Text
        style={{
          color: textColor,
          fontSize: 20,
        }}
      >
        {btnLabel}
      </Text>
    </TouchableOpacity>
  );
}
