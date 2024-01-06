import * as React from 'react';
import {RouteProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Languages from '../screens/Languages';
import Category from '../screens/Category';
import Result from '../screens/Result';
import AdDetails from '../screens/AdDetails';
import {HeaderBackButton} from '../components/components/atoms';
import SVGBack from '../assets/svg/back.svg';
import SettingsNavigation from './SettingsNavigation';
import Settings from '../screens/Settings';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import RatedUs from '../screens/RatedUs';
import { Preview } from '../screens/Preview';

export interface HomeNavigationProps<RouteName extends keyof HomeRoutes> {
  navigation: NativeStackNavigationProp<HomeRoutes, RouteName>;
  route: RouteProp<HomeRoutes, RouteName>;
}

export type HomeRoutes = {
  Home: undefined;
  Languages: undefined;
  Category: undefined;
  AdDetails: {
    selectedList: string[][];
    selectedItems: string[];
    detailsList: any[];
  };
  Result:  {
    title: string;
    description: string;
  };
  Settings: undefined;
  PrivacyPolicy: undefined;
  RatedUs: undefined;
  Preview: {
    html: any;
    css: any;
  }
};

const HomeNavigation = () => {
  const Stack = createNativeStackNavigator<HomeRoutes>();

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Group screenOptions={{presentation: 'fullScreenModal'}}>
        <Stack.Screen name="Languages" component={Languages} />
      </Stack.Group>
      <Stack.Screen
        name="Category"
        component={Category}
        options={({navigation, route}) => ({
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.navigate('Home')}
              Image={SVGBack}
            />
          ),
        })}
      />
      <Stack.Screen
        name="AdDetails"
        component={AdDetails}
        options={({navigation, route}) => ({
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.navigate('Category')}
              Image={SVGBack}
            />
          ),
        })}
      />
      <Stack.Screen name="Result" component={Result}  options={({navigation, route}) => ({
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.goBack()}
              Image={SVGBack}
            />
          ),
        })}/>
         <Stack.Screen name="Preview" component={Preview}  options={({navigation, route}) => ({
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.goBack()}
              Image={SVGBack}
            />
          ),
        })}/>
         <Stack.Screen name="Settings" component={Settings} options={({navigation, route}) => ({
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.goBack()}
              Image={SVGBack}
            />
          ),
        })}/>
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} options={({navigation, route}) => ({
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.goBack()}
              Image={SVGBack}
            />
          ),
        })}/>
        <Stack.Screen name="RatedUs" component={RatedUs} options={({navigation, route}) => ({
          headerLeft: () => (
            <HeaderBackButton
              onPress={() => navigation.goBack()}
              Image={SVGBack}
            />
          ),
        })}/>
    </Stack.Navigator>
  );
};

export default HomeNavigation;
