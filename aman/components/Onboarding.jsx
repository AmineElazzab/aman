import { Text, TouchableOpacity } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { Image } from "react-native";

const Skip = ({ ...props }) => (
  <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
    <Text
      className="
            font-bold
            text-lg"
    >
      SKIP
    </Text>
  </TouchableOpacity>
);

const Next = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
        <Text
            className="
            font-bold
            text-lg"
        >
            NEXT
        </Text>
    </TouchableOpacity>
);

const Done = ({ ...props }) => (
    <TouchableOpacity style={{ marginHorizontal: 10 }} {...props}>
        <Text
            className="
            font-bold
            text-lg"
        >
            DONE
        </Text>
    </TouchableOpacity>
);


const OnboardingScreen  = ({ navigation }) => {
  return (
    <Onboarding
        SkipButtonComponent={Skip}
        NextButtonComponent={Next}
        DoneButtonComponent={Done}
        onSkip={() => navigation.replace("Auth")}
        onDone={() => navigation.navigate("Auth")}
        pages={[
            {
                backgroundColor: "#fff",
                image: <Image source={require("../assets/img/oerder.png")} 
                style={{width: 300, height: 300}}
                />,
                title: "Order",
                subtitle: "Order water from your nearest vendor",
            },
            {
                backgroundColor: "#fff",
                image: <Image source={require("../assets/img/orderP.png")}
                style={{width: 300, height: 300}}
                />,
                title: "Order Processing",
                subtitle: "Your order is being processed",
                },
            {
                backgroundColor: "#fff",
                image: <Image source={require("../assets/img/delivery.png")}
                style={{width: 300, height: 300}}
                />,
                title: "Delivery",
                subtitle: "Your order is being delivered",
            },
            {
                backgroundColor: "#fff",
                image: <Image source={require("../assets/img/receiving.png")}
                style={{width: 300, height: 300}}
                />,
                title: "Receiving",
                subtitle: "Your order is being received",
            },
            {
                backgroundColor: "#fff",
                image: <Image source={require("../assets/img/enjoy.png")}
                style={{width: 300, height: 300}}
                />,
                title: "Complete",
                subtitle: "Your order is complete",
            },
        ]}
    />
  );
};

export default OnboardingScreen ;
