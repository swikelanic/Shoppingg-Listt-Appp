import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, TOGGLE_ITEM } from './types';

// Add a new item to the shopping list
export const addItem = (item) => ({
  type: ADD_ITEM,
  payload: item,
});

// Edit an existing item by ID
export const editItem = (id, updatedItem) => ({
  type: EDIT_ITEM,
  payload: { id, updatedItem },
});

// Delete an item by ID
export const deleteItem = (id) => ({
  type: DELETE_ITEM,
  payload: id,
});

// Toggle the purchased status of an item by ID
export const toggleItem = (id) => ({
  type: TOGGLE_ITEM,
  payload: id,
});
