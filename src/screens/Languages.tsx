import React, {useState} from 'react';
import {StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import {Box, Text, useTheme} from '../theme/Theme';
import data from '../utils/json/languages.json';
import SVGCheck from '.././assets/svg/check.svg';
import {HomeNavigationProps} from '../navigation/HomeNavigation';

interface Language {
  name: string;
  emoji: string;
}

const Languages = ({navigation}: HomeNavigationProps<'Languages'>) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string | null>(null);

  const handleLanguageSelection = (name: string) => {
    setSelectedLanguage(name === selectedLanguage ? null : name);
    navigation.goBack();
  };

  const renderItem = ({item}: {item: Language}) => (
    <TouchableOpacity
      style={[
        styles.row,
        {
          borderColor:
            item.name === selectedLanguage
              ? 'rgba(255, 81, 82, 1)'
              : 'rgba(253, 169, 71, 1)',
          borderRadius: 10, // Adjust the corner radius as needed
        },
      ]}
      onPress={() => handleLanguageSelection(item.name)}>
      <Box style={styles.iconContainer}>
        <Text style={styles.icon} variant="body">
          {item.emoji}
        </Text>
      </Box>
      <Text style={styles.languageName} variant="body" color="playlist">
        {item.name}
      </Text>
      <Box
        style={[
          styles.radio,
          {
            backgroundColor:
              item.name === selectedLanguage ? 'rgba(255, 81, 82, 1)' : 'white',
            borderColor:
              item.name === selectedLanguage
                ? 'rgba(255, 81, 82, 1)'
                : 'rgba(253, 169, 71, 1)',
          },
        ]}>
        {item.name === selectedLanguage && (
          <Box style={styles.radioInner}>
            <SVGCheck width={15} height={15} color="white" />
          </Box>
        )}
      </Box>
    </TouchableOpacity>
  );

  return (
    <Box flex={1}>
      <FlatList
        data={data.languages}
        renderItem={renderItem}
        keyExtractor={(item, index) => `${item.name}-${index}`}
      />
    </Box>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    borderWidth: 1,
    height: 50,
    margin: 16,
  },
  iconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderColor: 'rgba(253, 169, 71, 1)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  icon: {
    fontSize: 20,
  },
  languageName: {
    fontSize: 18,
    flex: 1,
  },
  radio: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
  radioInner: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: 'rgba(255, 81, 82, 1)',
    alignItems: 'center',
  },
});

export default Languages;
