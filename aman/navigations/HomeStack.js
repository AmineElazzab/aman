import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import Order from '../pages/Order';
import Menu from '../pages/Menu';
import Adress from '../pages/Adress';
// import OnboardingScreen from '../components/Onboarding';


const HomeStack = createNativeStackNavigator();

function App() {
    return (
        <HomeStack.Navigator>

            <HomeStack.Screen
                name="Home"
                component={Home}
                options={{
                    headerShown: false
                }}
            />
            <HomeStack.Screen
                name="Shop"
                component={Shop}
                options={{
                    headerShown: true
                }}
            />
            <HomeStack.Screen
                name="Cart"
                component={Cart}
                options={{
                    headerShown: true
                }}
            />
            <HomeStack.Screen
                name="Profile"
                component={Profile}
                options={{
                    headerShown: true
                }}
            />
            <HomeStack.Screen
                name="Order"
                component={Order}
                options={{
                    headerShown: true
                }}
            />
            <HomeStack.Screen
                name="Menu"
                component={Menu}
                options={{
                    headerShown: true
                }}
            />
            <HomeStack.Screen
                name="Adress"
                component={Adress}
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
        </HomeStack.Navigator>

    )
}

export default App;