import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {StyleSheet} from 'react-native';
import {Box, Text, useTheme} from '../theme/Theme';

const MyList = () => {
  const theme = useTheme();
  return (
    <Box flex={1} justifyContent="center">
      <LinearGradient
        colors={[
          theme.colors.linearGradientTopRight,
          theme.colors.linearGradientTopLeft,
          theme.colors.linearGradientBottomLeft,
        ]}
        style={styles.linearGradient}>
        <Text variant="body">MyList</Text>
      </LinearGradient>
    </Box>
  );
};

export default MyList;

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
  },
});
