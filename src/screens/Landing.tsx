import React from 'react';
import {ActivityIndicator, StyleSheet} from 'react-native';
import {useChatGpt} from 'react-native-chatgpt';
import {Box} from '../theme/Theme';
// import Navigation from '../navigation/Navigation';
import {NavigationContainer} from '@react-navigation/native';
import HomeNavigation from "../navigation/HomeNavigation"

import Login from './Login';

const Landing = () => {
  const {status} = useChatGpt();

  if (status === 'initializing') return null;

  if (status === 'logged-out' || status === 'getting_auth_token') {
    return (
      <Box flex={1} justifyContent="center">
        <Login />
        {status === 'getting_auth_token' && (
          <Box style={styles.loaderContainer}>
            <ActivityIndicator size="large" color="white" />
          </Box>
        )}
      </Box>
    );
  }
  return (
    <NavigationContainer>
      <HomeNavigation/>
    </NavigationContainer>
  )
};

export default Landing;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  loaderContainer: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
