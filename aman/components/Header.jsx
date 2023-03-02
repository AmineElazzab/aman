import { View, Text } from "react-native";


const Header = (props) => {
  return (
    <View
      style={{
        marginLeft: 10,
      }}
    >
      <Text
        style={{
            color: 'white',
            fontSize: 30,
            fontWeight: 'bold',
            justifyContent: 'center',
            alignItems: 'center',
            textAlign: 'center',
        }}
      >
        {props.name}
      </Text>
    </View>
  );
};

export default Header;
