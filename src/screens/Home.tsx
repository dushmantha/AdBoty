import React, {useState} from 'react';
import {ImageBackground, StyleSheet, TouchableOpacity} from 'react-native';
import {Box, Text, useTheme} from '../theme/Theme';
import {HomeNavigationProps} from '../navigation/HomeNavigation';
// import {IconButton} from '../components/components/atoms';
// import SVGBack from '../assets/svg/settings.svg';

const Home = ({navigation}: HomeNavigationProps<'Home'>) => {
  const theme = useTheme();

  return (
    <Box flex={1}>
      <ImageBackground
        style={styles.imgBackground}
        resizeMode="cover"
        source={require('../assets/getStartBackground/getstart.png')}>
        <Box
          flex={1.2}
          flexDirection="row"
          justifyContent="flex-end"
          alignItems="flex-start"
          paddingTop="xl"
          padding="m">
          {/* <IconButton Image={SVGBack} onPress={() => navigation.navigate('Settings')} /> */}
        </Box>
        <Box flex={1}>
          <ImageBackground
            style={{
              margin: 16,
              flex: 1,
              marginBottom: 100,
              flexWrap: 'wrap',
            }}
            resizeMode="stretch"
            source={require('../assets/getStart/rectangle.png')}>
            <Box flex={1} margin="l" justifyContent="center">
              <Text variant="body" color="text" textAlign="center">
                Welcome to AdBoty, your gateway to a world of possibilities.
                With our intuitive app, you can seamlessly manage your life,
                stay connected, and boost productivity. Let's get started!
              </Text>
              <TouchableOpacity
                style={{
                  backgroundColor: 'transparent',
                  alignItems: 'center',
                  paddingTop: 16,
                }}
                activeOpacity={0.5}
                onPress={() => navigation.navigate('Category')}>
                <ImageBackground
                  resizeMode="contain"
                  source={require('../assets/getStartButton/getstartbutton.png')}
                  style={{height: 50, width: '100%', justifyContent: 'center'}}>
                  <Text variant="title3" color="text" textAlign="center">
                    Get Start
                  </Text>
                </ImageBackground>
              </TouchableOpacity>
            </Box>
          </ImageBackground>
        </Box>
      </ImageBackground>
    </Box>
  );
};

export default Home;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
});
