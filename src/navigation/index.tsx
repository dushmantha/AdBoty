// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import { RouteProp } from "@react-navigation/native";
// import { NativeStackNavigationProp } from "@react-navigation/native-stack";
// import ChatScreen from '../screens/ChatScreen';
// import HomeScreen from '../screens/Home';
// import ProfileScreen from "../screens/Settings";



// const Navigation = () => {
//     const Stack = createNativeStackNavigator<AppRoutes>();
    
//     return <NavigationContainer>
//         <Stack.Navigator  initialRouteName='HomeScreen'>
//             <Stack.Screen  name="HomeScreen" component={HomeScreen} />
//             <Stack.Screen name="ChatScreen" component={ChatScreen} />
//             <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
//         </Stack.Navigator>
//     </NavigationContainer>
// }

// export default Navigation;



// export interface NavigationProps<RouteName extends keyof AppRoutes> {
//     navigation: NativeStackNavigationProp<AppRoutes, RouteName>;
//     route: RouteProp<AppRoutes, RouteName>;
// }

// export type AppRoutes = {
//     HomeScreen: undefined;
//     ChatScreen: undefined;
//     ProfileScreen: undefined;
// };

