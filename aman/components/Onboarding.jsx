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
        onSkip={() => navigation.replace("Login")}
        onDone={() => navigation.navigate("Login")}
        pages={[
            {
                backgroundColor: "#fff",
                image: <Image source={require("../assets/img/aman.png")} />,
                title: "Connect to the World",
                subtitle: "A New Way To Connect With The World",
            },
            {
                backgroundColor: "#fff",
                image: <Image source={require("../assets/img/aman.png")} />,
                title: "Share Your Favorites",
                subtitle: "Share Your Thoughts With Similar Kind of People",
            },
            {
                backgroundColor: "#fff",
                image: <Image source={require("../assets/img/aman.png")} />,
                title: "Become The Star",
                subtitle: "Let The Spot Light Capture You",
            },
        ]}
    />
  );
};

export default OnboardingScreen ;
