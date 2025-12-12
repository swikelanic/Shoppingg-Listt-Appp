import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { deleteItem, toggleItem } from '../actions/items';

export default function ItemRow({ item, onEdit }) {
  const dispatch = useDispatch();

  return (
    <View
      style={[styles.row, item.purchased && styles.purchasedRow]}
      accessibilityRole="listitem"
      accessibilityLabel={`Item: ${item.name}${item.purchased ? ', purchased' : ''}`}
    >
      <TouchableOpacity
        style={styles.itemTextContainer}
        onPress={() => dispatch(toggleItem(item.id))}
        accessibilityRole="checkbox"
        accessibilityState={{ checked: item.purchased }}
        accessibilityLabel={`Mark ${item.name} as ${item.purchased ? 'not purchased' : 'purchased'}`}
      >
        <Text style={[styles.text, item.purchased && styles.purchasedText]}>
          {item.name}
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.edit]}
        onPress={() => onEdit(item)}
        accessibilityRole="button"
        accessibilityLabel={`Edit ${item.name}`}
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={[styles.button, styles.delete]}
        onPress={() => dispatch(deleteItem(item.id))}
        accessibilityRole="button"
        accessibilityLabel={`Delete ${item.name}`}
      >
        <Text style={styles.buttonText}>Delete</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    padding: 12,
    marginVertical: 5,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.05,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
    elevation: 2,
  },
  purchasedRow: {
    backgroundColor: '#e0e0e0',
  },
  itemTextContainer: { flex: 1 },
  text: { fontSize: 18 },
  purchasedText: { textDecorationLine: 'line-through', color: 'gray' },
  button: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 5,
    marginLeft: 5,
  },
  edit: {
    backgroundColor: '#ffa500',
  },
  delete: {
    backgroundColor: '#ff4d4d',
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
