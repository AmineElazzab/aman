// import React from 'react';
// import {StatusBar} from 'react-native';
// import {NavigationContainer} from '@react-navigation/native';
// import {createNativeStackNavigator} from '@react-navigation/native-stack'
// import {CredentialsContext} from '../components/CredentialsContext';
// import Auth from "./Auth"
// import App from "./HomeStack"
// import Home from '../pages/Home';
// import Nav from '../components/Nav'
// import Onboarding from '../components/Onboarding';

// const Stack = createNativeStackNavigator();

// function Routes() {
//     return(
//         // <CredentialsContext.Consumer>
//         //     {({storedCredentials }) => (
//         //         <NavigationContainer>
//         //             <StatusBar barStyle="dark-content" />
//         //             <Stack.Navigator screenOptions={{headerShown: false}}>
//         //                 {storedCredentials ? (
//         //                     <Stack.Screen
//         //                         name="Nav"
//         //                         component={Nav}
//         //                         />
//         //                 ) : (
//         //                     <>
//         //                         <Stack.Screen
//         //                             name="Onboarding"
//         //                             component={Onboarding}
//         //                             />
//         //                         <Stack.Screen
//         //                             name="Auth"
//         //                             component={Auth}
//         //                             />

//         //                     </>
//         //                 )}
                        
//         //             </Stack.Navigator>
//         //         </NavigationContainer>
//         //     )}              
//         // </CredentialsContext.Consumer>
//         <CredentialsContext.Consumer>
//             {({storedCredentials }) => (
//                 <NavigationContainer>
//                     <StatusBar barStyle="dark-content" />
//                     <Stack.Navigator screenOptions={{headerShown: false}}>
                        
//                         {storedCredentials  ? (
                            
//                             <Stack.Screen
//                                 name="Nav"
//                                 component={Nav}
//                             />
//                         ) : (
//                           <>
                        
//                             <Stack.Screen
//                                 name="Auth"
//                                 component={Auth}
//                             />

//                             {!storedCredentials && (
//                                 <Stack.Screen
//                                     name="Home"
//                                     component={Home}
//                                 />
//                             )}
//                           </>
//                         )}
//                     </Stack.Navigator>
//                 </NavigationContainer>
//             )}              
//         </CredentialsContext.Consumer>
//     )
// }

// export default Routes;

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Auth from './Auth';
import App from './HomeStack';
// import AuthScreen from '../screens/AuthScreen';

import Nav from '../components/Nav';

import {CredentialsContext} from '../components/CredentialsContext';

const Stack = createNativeStackNavigator();

function Route() {
  return (
    <CredentialsContext.Consumer>
      {({storedCredentials}) => (
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown: false}}>
            {storedCredentials ? (
              <>
                <Stack.Screen name="Nav" component={Nav} />
                <Stack.Screen name="App" component={App} />
              </>
            ) : (
              <>
               

                <Stack.Screen
                  name="Auth"
                  component={Auth}
                  options={{
                    animation: 'slide_from_bottom',
                  }}
                />

                {!storedCredentials && (
                  <Stack.Screen
                    name="Nav"
                    component={Nav}
                    options={{animation: 'slide_from_right'}}
                  />
                )}
                <Stack.Screen name="App" component={App} />
              </>
            )}
          </Stack.Navigator>

          <StatusBar backgroundColor="#FFF" barStyle="dark-content" />
        </NavigationContainer>
      )}
    </CredentialsContext.Consumer>
  );
}

export default Route;