// import { RouteProp} from '@react-navigation/native';
// import {
//   NativeStackNavigationProp,
//   createNativeStackNavigator,
// } from '@react-navigation/native-stack';
// import MyList from '../screens/MyList';
// import Result from '../screens/Result';

// export interface DiscoverNavigationProps<RouteName extends keyof MyListRoutes> {
//   navigation: NativeStackNavigationProp<MyListRoutes, RouteName>;
//   route: RouteProp<MyListRoutes, RouteName>;
// }

// export type MyListRoutes = {
//   MyList: undefined;
//   Results: undefined;
// };

// const MyListNavigation = () => {
//   const Stack = createNativeStackNavigator<MyListRoutes>();

//   return (
//       <Stack.Navigator initialRouteName="MyList">
//         <Stack.Screen name="MyList" component={MyList} />
//         <Stack.Group screenOptions={{presentation: 'modal'}}>
//           <Stack.Screen name="Results" component={Result} />
//         </Stack.Group>
//       </Stack.Navigator>
//   );
// };

// export default MyListNavigation;
