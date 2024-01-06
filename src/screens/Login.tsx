import React, {useRef} from 'react';
import {
  ImageBackground,
  StyleSheet,
  Animated,
  Image,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {useChatGpt} from 'react-native-chatgpt';

import {Box, Text, useTheme} from '../theme/Theme';
import {TAnimator} from '../components/components/molecules';

const Login = () => {
  const theme = useTheme();
  const {login} = useChatGpt();
  const fadeAnim = useRef(new Animated.Value(0)).current;
  let deviceWidth = Dimensions.get('window').width;

  const fadeIn = () => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 2500,
      useNativeDriver: true,
    }).start();
  };

    return (
      <Box flex={1} justifyContent="center">
        <ImageBackground
          style={styles.imgBackground}
          resizeMode="cover"
          source={require('../assets/login/login.png')}>
          <Box
            style={{
              marginHorizontal: 16,
              justifyContent: 'flex-end',
              flex: 0.7,
            }}>
            <TAnimator
              content="Welcome to AI-powered Ads Content Creation. Get ready to revolutionize your ad campaigns with creativity and efficiency."
              textStyle={styles.testStyle}
              duration={500}
              onFinish={fadeIn}
            />
          </Box>
          <Box style={{flex: 1.4, marginVertical: 16, alignItems: 'center'}}>
            <Animated.View
              style={[
                styles.fadingContainer,
                {
                  // Bind opacity to animated value
                  opacity: fadeAnim,
                  width: deviceWidth,
                  height: deviceWidth,
                },
              ]}>
              <Image
                style={{flex: 1}}
                resizeMode="cover"
                source={require('../assets/appIconWhite/appiconwhite.png')}
              />
              <TouchableOpacity
                style={[styles.button, {width: deviceWidth / 1.4}]}
                onPress={login}>
                <Text variant="title2" style={styles.buttonText}>
                  Login
                </Text>
              </TouchableOpacity>
            </Animated.View>
          </Box>
        </ImageBackground>
      </Box>
    );
};

export default Login;

const styles = StyleSheet.create({
  imgBackground: {
    width: '100%',
    height: '100%',
    flex: 1,
  },
  testStyle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 1,
    color: 'white',
  },
  fadingContainer: {
    alignSelf: 'center',
    alignItems: 'center',
  },
  button: {
    borderRadius: 10,
    borderWidth: 2,
    borderColor: 'white',
    paddingHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    flexDirection: 'row',
    backgroundColor: 'transparent',
    alignContent: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});
