import React, { useState } from 'react';
import {
  TextInput,
  View,
  StyleSheet,
  TouchableWithoutFeedback,
  Modal,
  Button,
  FlatList,
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import colors from '../config/colors';
import defaultStyles from '../config/styles';
import AppText from './AppText';
import Screen from './Screen';
import PickerItem from './PickerItem';

// A custome picker to cretae a picker item which uses a modal to display the options
function AppPicker({ icon, items, placeholder, selectedItem, onSelectItem }) {
  //state to set the modal visibility to on or off
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      {/*Touchable tag with no feedback action to display or hide the modal  */}
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {/* if an icon exists then render it */}
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}

          {/* App text tag to show the lable of selected item if it has been passed as prop or show the placeholder */}
          <AppText style={styles.text}>
            {/* if an item is selected show that item otherwise shoe the placeholder */}
            {selectedItem ? selectedItem.lable : placeholder}
          </AppText>

          {/* Chevron icon on the righ side of the touchable tag */}
          <MaterialCommunityIcons
            name="chevron-down"
            size={30}
            color={colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>

      {/* Modal to show the list of categories */}
      <Modal visible={modalVisible} animationType="slide">
        <Screen>
          {/* close button to close the modal */}
          <Button title="Close" onPress={() => setModalVisible(false)} />

          {/* List the itwms passed to the component as prop */}
          <FlatList
            data={items}
            // set a unique key for each item
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              //render the PickerItem component for each item
              <PickerItem
                // pass  the lable of each item as prop to PickerItem
                lable={item.lable}
                // on press change modal visibility to false and pass the item to onSelectItem function in props
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </Screen>
      </Modal>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.light,
    borderRadius: 25,
    flexDirection: 'row',
    width: '100%',
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
  },
  text: {
    flex: 1,
  },
});

export default AppPicker;
