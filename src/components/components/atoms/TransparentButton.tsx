import React from 'react';
import {TouchableOpacity, Text, StyleSheet} from 'react-native';
import {useTheme} from '../../../theme/Theme';
import SVGArrowRight from '../../../assets/svg/arrow-right.svg';

interface TransparentButtonProps {
  text: string;
  onPress: () => void;
}

const TransparentButton: React.FC<TransparentButtonProps> = ({
  text,
  onPress,
}) => {
  const buttonStyle = {
    ...styles.button,
    backgroundColor: 'transparent',
  };

  return (
    <TouchableOpacity style={buttonStyle} onPress={onPress}>
      <Text
        style={[styles.buttonText]}>
        {text}
      </Text>
      <SVGArrowRight width={20} height={40} color="white" />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'white',
    paddingHorizontal: 20,
    marginVertical: 20,
    alignItems: 'center',
    height:50,
    justifyContent:'space-between',
    flexDirection: 'row'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
});

export default TransparentButton;
