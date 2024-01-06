import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

export interface Platform {
  name: string;
  words: number;
}

interface DropdownPickerProps {
  platforms: Platform[];
  onSelectPlatform: (selectedPlatform: Platform) => void;
}

const DropdownPicker: React.FC<DropdownPickerProps> = ({ platforms, onSelectPlatform }) => {
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const platformItems: any = platforms.map((platform, index) => ({
    label: platform.name,
    value: index.toString(),
  }));

  return (
    <RNPickerSelect
      onValueChange={(value, index) => {
        setSelectedPlatform(value);
        if (index > 0)
        onSelectPlatform(platforms[index - 1]);
      }}
      items={platformItems}
      placeholder={{ label: 'Select a platform', value: null }}
      value={selectedPlatform}
    />
  );
};

export default DropdownPicker;

