import React, { useState, useEffect } from 'react';
import {
  Modal,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from 'react-native';
import { useDispatch } from 'react-redux';
import { editItem } from '../actions/items';
import { validateItem } from '../utils/validator';

export default function EditItemModal({ visible, item, onClose }) {
  const [name, setName] = useState('');
  const [quantity, setQuantity] = useState('');
  const dispatch = useDispatch();

  useEffect(() => {
    if (item) {
      setName(item.name);
      setQuantity(item.quantity ? String(item.quantity) : '');
    }
  }, [item]);

  const handleSave = () => {
    if (!validateItem(name)) {
      Alert.alert('Error', 'Item name cannot be empty');
      return;
    }
    dispatch(editItem(item.id, { name, quantity: quantity || undefined }));
    onClose();
  };

  return (
    <Modal visible={visible} transparent animationType="slide">
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : undefined}
        style={styles.container}
      >
        <View style={styles.content}>
          <Text style={styles.header}>Edit Item</Text>

          <Text style={styles.label}>Item Name</Text>
          <TextInput
            value={name}
            onChangeText={setName}
            style={styles.input}
            placeholder="Enter item name"
            accessibilityLabel="Item Name Input"
            accessibilityHint="Edit the name of the item"
          />

          <Text style={styles.label}>Quantity (optional)</Text>
          <TextInput
            value={quantity}
            onChangeText={setQuantity}
            style={styles.input}
            placeholder="Enter quantity"
            keyboardType="numeric"
            accessibilityLabel="Quantity Input"
            accessibilityHint="Edit the quantity of the item"
          />

          <View style={styles.buttons}>
            <TouchableOpacity
              style={[styles.button, styles.save]}
              onPress={handleSave}
              accessibilityRole="button"
              accessibilityLabel="Save button"
              accessibilityHint="Saves the edited item"
            >
              <Text style={styles.buttonText}>Save</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.button, styles.cancel]}
              onPress={onClose}
              accessibilityRole="button"
              accessibilityLabel="Cancel button"
              accessibilityHint="Closes the edit modal without saving"
            >
              <Text style={styles.buttonText}>Cancel</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#000000aa',
    paddingHorizontal: 20,
  },
  content: {
    backgroundColor: '#fff',
    padding: 20,
    borderRadius: 10,
  },
  header: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    color: '#1e90ff',
  },
  label: {
    marginBottom: 5,
    fontWeight: 'bold',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginBottom: 15,
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    flex: 1,
    padding: 12,
    borderRadius: 5,
    marginHorizontal: 5,
    alignItems: 'center',
  },
  save: {
    backgroundColor: '#28a745',
  },
  cancel: {
    backgroundColor: '#dc3545',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
