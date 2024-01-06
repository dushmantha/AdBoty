import React from 'react';
import {TouchableOpacity} from 'react-native';

interface HeaderBackButtonProps {
  onPress: () => void;
  Image?: any;
}

const HeaderBackButton = ({onPress, Image}: HeaderBackButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {Image && <Image width={35} height={35} />}
    </TouchableOpacity>
  );
};

export default HeaderBackButton;
