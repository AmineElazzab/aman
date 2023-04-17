import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../pages/Home';
import Shop from '../pages/Shop';
import Cart from '../pages/Cart';
import Profile from '../pages/Profile';
import Order from '../pages/Order';
import Menu from '../pages/Menu';
import Adress from '../pages/Adress';
import Details from '../pages/Details';
import ProductbyCategory from '../pages/ProductbyCategory'
import About from '../pages/About'
import Contact from '../pages/Contact'
import TaP from '../pages/TaP'
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
                    headerShown: false
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
                    headerShown: false
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
            <HomeStack.Screen
                name="Details"
                component={Details}
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
            <HomeStack.Screen
                name="ProductbyCategory"
                component={ProductbyCategory}
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
            <HomeStack.Screen
                name="About"
                component={About}
                options={{
                    headerShown: false
                }}
            />
            <HomeStack.Screen
                name="Contact"
                component={Contact}
                options={{
                    headerShown: false
                }}
            />
            <HomeStack.Screen
                name="TaP"
                component={TaP}
                options={{
                    headerShown: false
                }}
            />

        </HomeStack.Navigator>

    )
}

export default App;