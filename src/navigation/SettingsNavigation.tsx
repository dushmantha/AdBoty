import { RouteProp} from '@react-navigation/native';
import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from '@react-navigation/native-stack';
import Settings from '../screens/Settings';
import PrivacyPolicy from '../screens/PrivacyPolicy';
import RatedUs from '../screens/RatedUs';

export interface SettingsNavigationProps<
  RouteName extends keyof SettingsRoutes,
> {
  navigation: NativeStackNavigationProp<SettingsRoutes, RouteName>;
  route: RouteProp<SettingsRoutes, RouteName>;
}

export type SettingsRoutes = {
  Settings: undefined;
  PrivacyPolicy: undefined;
  RatedUs: undefined;
};

const SettingsNavigation = () => {
  const Stack = createNativeStackNavigator<SettingsRoutes>();

  return (
      <Stack.Navigator initialRouteName="Settings">
        <Stack.Screen name="Settings" component={Settings} />
        <Stack.Screen name="PrivacyPolicy" component={PrivacyPolicy} />
        <Stack.Screen name="RatedUs" component={RatedUs} />
      </Stack.Navigator>
  );
};

export default SettingsNavigation;
