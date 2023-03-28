import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from '../pages/Login';
import Register from '../pages/Register';

const AuthStack = createNativeStackNavigator();

function Auth() {
    return (
        <AuthStack.Navigator
            initialRouteName="Login"
            screenOptions={{
                headerShown: false
            }}
        >
            <AuthStack.Screen
                name="Login"
                component={Login}
                options={{
                    headerShown: false
                }}
            />
            <AuthStack.Screen
                name="Register"
                component={Register}
                options={{
                    headerShown: false
                }}
            />
        </AuthStack.Navigator>

    )
}

export default Auth;