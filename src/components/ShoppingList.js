import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import { useSelector } from 'react-redux';
import AddItem from './AddItem';
import ItemRow from './ItemRow';
import EditItemModal from './EditItemModal';

export default function ShoppingList() {
  const items = useSelector(state => state.items);
  const [editingItem, setEditingItem] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const handleEdit = (item) => {
    setEditingItem(item);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <Text 
        style={styles.header} 
        accessibilityRole="header" 
        accessibilityLabel="Shopping List Header"
      >
        🛒 My Shopping List
      </Text>

      {/* Add Item Input */}
      <AddItem />

      {/* Empty state */}
      {items.length === 0 && (
        <Text 
          style={styles.empty} 
          accessibilityLabel="No items in your shopping list"
        >
          No items yet
        </Text>
      )}

      {/* List of items */}
      <FlatList
        data={items}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <ItemRow item={item} onEdit={handleEdit} />
        )}
        contentContainerStyle={{ paddingBottom: 20 }}
      />

      {/* Edit Modal */}
      {editingItem && (
        <EditItemModal
          visible={modalVisible}
          item={editingItem}
          onClose={() => setModalVisible(false)}
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
    padding: 20,
    paddingTop: 40,
  },
  header: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#1e90ff',
    textAlign: 'center',
  },
  empty: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
    color: 'gray',
  },
});
