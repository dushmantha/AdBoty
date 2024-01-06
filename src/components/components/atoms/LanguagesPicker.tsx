import React, { useState } from 'react';
import RNPickerSelect from 'react-native-picker-select';

export interface Languages {
  name: string;
}

interface LanguagesPickerProps {
  languages: Languages[];
  onSelectLanguages: (selectedLanguages: Languages) => void;
}

const LanguagesPicker: React.FC<LanguagesPickerProps> = ({ languages, onSelectLanguages }) => {
  const [selectedLanguages, setSelectedLanguages] = useState<string | null>(null);

  const languagesItems: any = languages.map((languages, index) => ({
    label: languages.name,
    value: index.toString(),
  }));

  return (
    <RNPickerSelect
      onValueChange={(value, index) => {
        setSelectedLanguages(value);
        if (index > 0)
        onSelectLanguages(languages[index - 1]);
      }}
      items={languagesItems}
      placeholder={{ label: 'Select a languages', value: null }}
      value={selectedLanguages}
    />
  );
};

export default LanguagesPicker;