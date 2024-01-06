import React, {useEffect, useState, useRef} from 'react';
import { useChatGpt } from 'react-native-chatgpt';
import {
  ScrollView,
  StyleSheet,
  TextInput,
  View,
  TouchableOpacity,
  Modal,
  Alert,
  Switch,
  ImageBackground,
} from 'react-native';
import {Box, Text, useTheme} from '../theme/Theme';
import {HomeNavigationProps} from '../navigation/HomeNavigation';
import {Ionicons} from '@expo/vector-icons';
import Slider from '@react-native-community/slider';
import {DropdownPicker, LanguagesPicker} from '../components/components/atoms';
import {platforms, languages} from '../api/category';
interface Product {
  [key: string]: string;
}

const AdDetails: React.FC<HomeNavigationProps<'AdDetails'>> = ({route, navigation}) => {
  const theme = useTheme();
  const {detailsList, selectedItems, selectedList} = route.params;

  const resultArray = detailsList.flatMap(obj =>
    Object.keys(obj).map(key => ({[key]: obj[key]})),
  );

  const [wordSize, setWordSize] = useState(0);
  const [selectPlatform, setSelectPlatform] = useState('');
  const [selectLanguage, setSelectLanguage] = useState('');
  const [focusedInput, setFocusedInput] = useState<number | null>(null);
  const [newDetails, setNewDetails] = useState<Product[]>([]);
  const [updatedDetails, setUpdatedDetails] = useState<Product[]>([]);
  const [isModalVisible, setModalVisible] = useState<boolean>(false);
  const [detailInput, setDetailInput] = useState<string>('');
  const [valueInput, setValueInput] = useState<string>('');
  const [selectedDetails, setSelectedDetails] = useState(resultArray);
  const [isEmojiEnabled, setIsEmojiEnabled] = useState(false);
  const [isSepecialNoteEnabled, setIsSepecialNoteEnabled] = useState(false);
  const [additionalNote, setAdditionalNote] = useState<string>('');

  useEffect(() => {
    navigation.setOptions({
      title: String(selectedItems),
    });
  }, []);

  const onValueChange = (value: number) => {
    setWordSize(value);
  };

  const handleFocus = (index: number) => {
    setFocusedInput(index);
  };

  const handleBlur = () => {
    setFocusedInput(null);
  };

  const addNewItem = () => {
    setModalVisible(true);
  };

  const closeModal = () => {
    // Save the new details when the modal is closed
    if (detailInput.trim() !== '' && valueInput.trim() !== '') {
      setNewDetails([...newDetails, {[detailInput]: valueInput}]);
      setDetailInput('');
      setValueInput('');
    }

    setModalVisible(false);
  };

  const removeNewItem = (indexToRemove: number) => {
    setNewDetails(prevDetails =>
      prevDetails.filter((_, index) => index !== indexToRemove),
    );
  };

  const mergeArrays = (arr1: Product[], arr2: Product[]): Product[] => {
    const mergedArray = [...arr1, ...arr2];
    const uniqueMergedArray = Array.from(
      new Set(mergedArray.map(obj => JSON.stringify(obj))),
    ).map(str => JSON.parse(str) as Product);
    return uniqueMergedArray;
  };

  const removeItem = (indexToRemove: number) => {
    setSelectedDetails(prevDetails =>
      prevDetails.filter((_, index) => index !== indexToRemove),
    );
  };

  const addOrUpdateSelectedDetails = ( key: string, value: string) => {
    // Check if the key already exists in the array
    const keyIndex = updatedDetails.findIndex(obj => obj.hasOwnProperty(key));

    if (keyIndex !== -1) {
      // If the key exists, update the value
      setUpdatedDetails(prevDetails => {
        const newDetails = [...prevDetails];
        newDetails[keyIndex] = {...newDetails[keyIndex], [key]: value};
        return newDetails;
      });
    } else {
      // If the key doesn't exist, add a new object
      setUpdatedDetails(prevDetails => [...prevDetails, {[key]: value}]);
    }

    setValueInput('');
  };

  const isTextInputEmpty = (key: string) => {
    return updatedDetails.some(obj => {
        return Object.keys(obj).includes(key) && obj[key] !== "";
    });
};

  const handleSelectPlatform = (selectedPlatform: any) => {
    // Extract platform name and word count

    const {name, words} = selectedPlatform;
    setWordSize(words);
    setSelectPlatform(name);
    console.log('Selected Platform:', name);
    console.log('Word Count:', words);
  };

  const handleSelectLanguage = (selectedLanguage: any) => {
    // Extract platform name and word count

    const {name} = selectedLanguage;
    setSelectLanguage(name);
    console.log('Selected Language:', name);
  };

  const toggleEmojiSwitch = () => {
    setIsEmojiEnabled(previousState => !previousState);
  };

  const toggleSpecialNoteSwitch = () => {
    setIsSepecialNoteEnabled(previousState => !previousState);
  };


  const continueButtonClicked = () => {
    //You can now use 'filledDetails' array as needed

    if (selectedDetails.length > updatedDetails.length) {
      Alert.alert(
        'Incomplete Details',
        'Please fill in all the details before continuing.',
        [{text: 'OK', onPress: () => console.log('OK Pressed')}],
      );
    } else {
      // const mergedArray = [...newDetails, ...updatedDetails];
      // const uniqueMergedArray = Array.from(
      //   new Set(mergedArray.map(obj => JSON.stringify(obj))),
      // ).map(str => JSON.parse(str) as Product);
  
      // console.log(JSON.stringify(uniqueMergedArray), additionalNote, isEmojiEnabled,selectPlatform, wordSize, selectLanguage, selectedList );
       
      //  console.log(JSON.stringify("responseText"));
      //  navigation.navigate('Result')
    }

    const mergedArray = [...newDetails, ...updatedDetails];
    const uniqueMergedArray = Array.from(
      new Set(mergedArray.map(obj => JSON.stringify(obj))),
    ).map(str => JSON.parse(str) as Product);

    console.log(JSON.stringify(uniqueMergedArray), additionalNote, isEmojiEnabled,selectPlatform, wordSize, selectLanguage, selectedList );

    const title = `create a best attaction eye catching ad title for this ${selectedList} using following details ${uniqueMergedArray}, aximum words: ${wordSize/3}, emojiEnabled: ${isEmojiEnabled}, Language: ${selectLanguage}`
     
    const description = `create a best attaction eye catching ad content for this item: ${selectedList}, using following details: ${uniqueMergedArray}, platform: ${selectPlatform}, maximum words: ${wordSize}, emojiEnabled: ${isEmojiEnabled}, Language: ${selectLanguage}`
     console.log(JSON.stringify("responseText"));
     navigation.navigate('Result', {
      title: title,
      description: description
     })
  };

  return (
    <ScrollView style={{flex: 1}} showsVerticalScrollIndicator={false}>
      <Box flex={1} justifyContent="center" marginBottom="xl">
        <View style={styles.container}>
          {selectedDetails.map((product, index) => (
            <View key={index} style={styles.productContainer}>
              {Object.entries(product).map(([key, value]) => (
                <View key={key} style={styles.rowContainer}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label} variant="body">
                      {key}
                    </Text>
                    <TextInput
                      style={[
                        styles.input,
                        focusedInput === index && styles.focusedInput,
                        !isTextInputEmpty(key) && styles.emptyInput,
                      ]}
                      placeholder={String(value)}
                      placeholderTextColor="#888"
                      onFocus={() => handleFocus(index)}
                      onBlur={handleBlur}
                      multiline
                      onChangeText={(text) =>
                        addOrUpdateSelectedDetails(key, text)
                      }
                    />
                    <TouchableOpacity onPress={() => removeItem(index)}>
                      <Ionicons name="ios-close" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          ))}
          {newDetails.map((item, index) => (
            <View key={`new-${index}`} style={styles.productContainer}>
              {Object.entries(item).map(([detail, detailValue]) => (
                <View key={detail} style={styles.rowContainer}>
                  <View style={styles.labelContainer}>
                    <Text style={styles.label} variant="body">
                      {detail}
                    </Text>
                    <Text style={styles.input} variant="body">
                      {detailValue}
                    </Text>
                    <TouchableOpacity
                      onPress={() => removeNewItem(index)}
                      style={styles.deleteButton}>
                      <Ionicons name="ios-close" size={24} color="red" />
                    </TouchableOpacity>
                  </View>
                </View>
              ))}
            </View>
          ))}
        
          <TouchableOpacity
              style={{
                backgroundColor: 'transparent',
                alignItems: 'center',
                paddingVertical: 16,
              }}
              activeOpacity={0.5}
              onPress={addNewItem}>
              <ImageBackground
                resizeMode="contain"
                source={require('../assets/getStartButton/getstartbutton.png')}
                style={{height: 50, width: '100%', justifyContent: 'center'}}>
                 <Text variant="title3" color="text" textAlign="center">Add New Deatils</Text>
              </ImageBackground>
            </TouchableOpacity>
         
          <View style={styles.productContainer}>
          <View style={styles.productContainer}>
              <LanguagesPicker
                languages={languages}
                onSelectLanguages={handleSelectLanguage}
              />
            </View>
            <View style={styles.productContainer}>
              <DropdownPicker
                platforms={platforms}
                onSelectPlatform={handleSelectPlatform}
              />
            </View>
            {wordSize != 0 && <View style={styles.productContainer}>
              <Text variant="body" style={styles.label}>
              Here are our top recommendations for word counts for {selectPlatform}:{' '}
                {wordSize}
              </Text>
              <Slider
                style={styles.slider}
                minimumValue={10}
                maximumValue={3000}
                minimumTrackTintColor='rgba(255, 81, 82, 1)'
                maximumTrackTintColor='rgba(253, 169, 71, 1)'
                thumbTintColor='rgba(255, 81, 82, 1)'
                step={5}
                value={wordSize}
                onValueChange={onValueChange}
              />
            </View>}
            
            <View style={[styles.productContainer, {flexDirection: 'row'}]}>
              <Text variant="body" style={styles.label}>
                Do you want add emoji:
              </Text>
              <Switch
                trackColor={{false: '#f4f3f4', true: 'rgba(253, 169, 71, 1)'}}
                thumbColor={isEmojiEnabled ? 'rgba(255, 81, 82, 1)' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleEmojiSwitch}
                value={isEmojiEnabled}
              />
            </View>

            <View style={[styles.productContainer, {flexDirection: 'row'}]}>
              <Text variant="body" style={styles.label}>
                Additional Note:
              </Text>
              <Switch
                trackColor={{false: '#f4f3f4', true: 'rgba(253, 169, 71, 1)'}}
                thumbColor={isSepecialNoteEnabled ? 'rgba(255, 81, 82, 1)' : '#f4f3f4'}
                ios_backgroundColor="#3e3e3e"
                onValueChange={toggleSpecialNoteSwitch}
                value={isSepecialNoteEnabled}
              />
            </View>
            {isSepecialNoteEnabled && (
              <TextInput
                style={[styles.inputModal, {height: 80}]}
                placeholder="Detail"
                placeholderTextColor="#888"
                multiline
                value={additionalNote}
                onChangeText={text => setAdditionalNote(text)}
              />
            )}
          </View>
        </View>
        <TouchableOpacity
              style={{
                backgroundColor: 'transparent',
                alignItems: 'center',
                paddingVertical: 16,
              }}
              activeOpacity={0.5}
              onPress={continueButtonClicked}>
              <ImageBackground
                resizeMode="contain"
                source={require('../assets/getStartButton/getstartbutton.png')}
                style={{height: 50, width: '100%', justifyContent: 'center'}}>
                 <Text variant="title3" color="text" textAlign="center">Continue</Text>
              </ImageBackground>
            </TouchableOpacity>
         
        <Modal visible={isModalVisible} animationType="slide" transparent>
          <View style={styles.modalContainer}>
            <View style={styles.modalContent}>
              <Text variant="body" style={{color: '#322'}}>
                Add New Details
              </Text>
              <TextInput
                style={styles.inputModal}
                placeholder="Detail"
                placeholderTextColor="#888"
                multiline
                value={detailInput}
                onChangeText={text => setDetailInput(text)}
              />
              <TextInput
                style={styles.inputModal}
                placeholder="New Value"
                placeholderTextColor="#888"
                multiline
                value={valueInput}
                onChangeText={text => setValueInput(text)}
              />
              <View style={styles.modalButtonsContainer}>
                <TouchableOpacity
                  style={styles.modalButton}
                  onPress={closeModal}>
                  <Text variant="body">Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}>
                  <Text variant="body">Close</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </Modal>
      </Box>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    flex: 1,
  },
  productContainer: {
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 8,
    borderRadius: 8,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 8,
  },
  labelContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  label: {
    fontWeight: 'bold',
    marginRight: 8,
    color: "black",
    flex: 1,
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    color: '#333',
  },
  inputModal: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 4,
    padding: 8,
    color: '#333',
    marginVertical: 16,
  },
  focusedInput: {
    height: 100, // Adjust the height as needed when focused
  },
  addButton: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(255, 81, 82, 1)',
    paddingVertical: 12,
    borderRadius: 8,
    marginHorizontal: 8,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
    elevation: 5,
    width: '80%',
  },
  modalButtonsContainer: {
    flexDirection: 'row',
  },
  modalButton: {
    backgroundColor: 'rgba(253, 169, 71, 1)',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
    flex: 1,
    marginRight: 8,
  },
  closeButton: {
    backgroundColor: 'rgba(255, 81, 82, 1)',
    paddingVertical: 12,
    borderRadius: 8,
    marginTop: 16,
    alignItems: 'center',
    flex: 1,
  },
  deleteButton: {
    marginLeft: 8,
  },
  emptyInput: {
    borderColor: 'rgba(255, 81, 82, 1)',
  },
  slider: {
    width: '100%',
    marginVertical: 16,
  },
});

export default AdDetails;
