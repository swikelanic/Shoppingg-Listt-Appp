import React, { useState } from 'react';
import {
  View,
  TextInput,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
  Keyboard,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { addItem } from '../actions/items';
import { validateItem } from '../utils/validator';

export default function AddItem() {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useDispatch();

  const handleAdd = () => {
    if (!validateItem(name)) {
      Alert.alert('Error', 'Item name cannot be empty');
      return;
    }

    dispatch(
      addItem({
        id: Date.now().toString(),
        name,
        quantity: quantity || undefined,
        purchased: false,
      })
    );
    setName('');
    setQuantity('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Item name"
        value={name}
        onChangeText={setName}
        accessibilityLabel="Item name input"
        accessibilityHint="Enter the name of the item to add to your shopping list"
        returnKeyType="next"
      />
      <TextInput
        style={styles.inputQuantity}
        placeholder="Qty"
        value={quantity}
        onChangeText={setQuantity}
        keyboardType="numeric"
        accessibilityLabel="Item quantity input"
        accessibilityHint="Enter the quantity for the item"
        returnKeyType="done"
        onSubmitEditing={handleAdd}
      />
      <TouchableOpacity
        style={styles.button}
        onPress={handleAdd}
        accessibilityRole="button"
        accessibilityLabel="Add item button"
        accessibilityHint="Adds the item to your shopping list"
      >
        <Text style={styles.buttonText}>Add</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginVertical: 10,
    alignItems: 'center',
  },
  input: {
    flex: 2,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 5,
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  inputQuantity: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginRight: 5,
    borderRadius: 5,
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#007bff',
    paddingHorizontal: 15,
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
