import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {Box, Text, useTheme} from '../theme/Theme';

const Settings = () => {
  const theme = useTheme();
  return (
    <Box flex={1} justifyContent="center">

    </Box>
  );
};

export default Settings;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
