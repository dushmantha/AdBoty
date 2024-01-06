
import React, {useState, useLayoutEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  StyleSheet,
  ScrollView,
  TouchableWithoutFeedback,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import {jsonData} from '../api/category';
import {HomeNavigationProps} from '../navigation/HomeNavigation';

interface CategoryItem {
  name: string;
  id: number;
  details?: any; // Store details for the selected item
  subcategories?: CategoryItem[];
}

const NestedList: React.FC<{
  item: CategoryItem;
  selectedNames: string[];
  onSelect: (name: string, hierarchy: string[], details: any) => void;
  hierarchy: string[]; // Pass the hierarchy from the parent
  details?: any;
}> = ({item, selectedNames, onSelect, hierarchy, details}) => {
  const isSelected = selectedNames.includes(item.name);
  const [expanded, setExpanded] = useState(false);
  const toggleExpand = () => {
    setExpanded(!expanded);
  };

  const hasSubcategories = item.subcategories && item.subcategories.length > 0;

  const handleSelect = () => {
    if (isSelected) {
      // If the item is already selected, remove it from the selected list
      onSelect(
        item.name,
        hierarchy.filter(name => name !== item.name),
        details, // Pass details of the selected item
      );
    } else {
      // If the item is not selected, add it to the selected list
      onSelect(item.name, [...hierarchy], details);
    }
  };

  return (
    <View style={styles.row}>
      <TouchableOpacity
        onPress={hasSubcategories ? toggleExpand : handleSelect}
        style={styles.header}>
        <Text>{item.name}</Text>

        {hasSubcategories ? (
          <Ionicons
            name={expanded ? 'ios-arrow-up' : 'ios-arrow-down'}
            size={24}
            color="black"
          />
        ) : (
          <Ionicons
            name={isSelected ? 'ios-checkmark-circle' : 'ios-radio-button-off'}
            size={24}
            color={isSelected ? 'green' : 'gray'}
          />
        )}
      </TouchableOpacity>
      {hasSubcategories && expanded && (
        <View style={styles.options}>
          {item.subcategories!.map((subcategory, index) => (
            <NestedList
              key={index}
              item={subcategory}
              selectedNames={selectedNames}
              onSelect={onSelect}
              hierarchy={[...hierarchy, item.name]} // Pass the hierarchy to child components
              details={item.details}
            />
          ))}
        </View>
      )}
    </View>
  );
};

const Category = ({navigation}: HomeNavigationProps<'Category'>) => {
  const [selectedNames, setSelectedNames] = useState<string[]>([]);
  const [selectedHierarchy, setSelectedHierarchy] = useState<string[][]>([]);
  const [selectedDetails, setSelectedDetails] = useState<any[]>([]); // Array to store selected details
  const [addingNewItem, setAddingNewItem] = useState(false);
  const [newItemText, setNewItemText] = useState('');

  useLayoutEffect(() => {
    // Use `setOptions` to update the button that we previously specified
    // Now the button includes an `onPress` handler to update the count
    navigation.setOptions({
      headerRight: () => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('AdDetails', {
              selectedList: selectedHierarchy,
              selectedItems: selectedNames,
              detailsList: selectedDetails,
            })
          }>
          <Text>Continue</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, selectedDetails, selectedNames, selectedHierarchy]);

  const handleSelect = (name: string, hierarchy: string[], details: any) => {
    setSelectedNames([name]); // Select the current item and deselect others
    // Add the hierarchy and details to the selected arrays
    setSelectedHierarchy([[...hierarchy, name]]);
    setSelectedDetails(details);
  };

  const startAddingNewItem = () => {
    setAddingNewItem(true);
  };

  const continueAddingNewItem = () => {
    // Clear the text input and hide it
    setNewItemText('');
    setAddingNewItem(false);
    navigation.navigate('AdDetails', {
      selectedList: selectedHierarchy,
      selectedItems: selectedNames,
      detailsList: selectedDetails,
    });
  };

  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        {jsonData.categories.map((category, index) => (
          <NestedList
            key={index}
            item={category}
            selectedNames={selectedNames}
            onSelect={handleSelect}
            hierarchy={[]} // Initialize the hierarchy array
          />
        ))}

        {!addingNewItem ? (   
          <TouchableOpacity
            style={styles.addNewButton}
            onPress={startAddingNewItem}>
            <Text>If not, Please add here, what you are going to sell</Text>
          </TouchableOpacity>
        ) : (
          <View style={styles.newItemContainer}>
            <TextInput
              style={styles.newItemInput}
              placeholder="Enter new item"
              onChangeText={text => setNewItemText(text)}
              value={newItemText}
            />
            <TouchableOpacity
              style={styles.newItemButton}
              onPress={continueAddingNewItem}>
              <Text>Continue</Text>
            </TouchableOpacity>
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingHorizontal:16
  },
  row: {
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 8,
    padding: 10,
    borderColor: '#ccc',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  options: {
    marginTop: 10,
  },
  selectButton: {
    marginRight: 10,
  },
  addNewButton: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
    marginTop: 10,
  },
  newItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  newItemInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
  },
  newItemButton: {
    marginLeft: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    alignItems: 'center',
  },
});

export default Category;

