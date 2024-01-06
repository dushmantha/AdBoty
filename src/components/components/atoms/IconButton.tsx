import React from 'react';
import {TouchableOpacity} from 'react-native';

interface IconButtonProps {
  onPress: () => void;
  Image?: any;
}

const IconButton = ({onPress, Image}: IconButtonProps) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {Image && <Image width={70} height={70} />}
    </TouchableOpacity>
  );
};

export default IconButton;