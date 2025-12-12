import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, TOGGLE_ITEM } from '../actions/types';

// Initial state: an array of shopping items
// Each item: { id: string, name: string, quantity: number, purchased: boolean }
const initialState = [];

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      // Add a new item to the list
      return [...state, action.payload];

    case EDIT_ITEM:
      // Edit an existing item by id
      return state.map(item =>
        item.id === action.payload.id
          ? { ...item, ...action.payload.updatedItem }
          : item
      );

    case DELETE_ITEM:
      // Remove item by id
      return state.filter(item => item.id !== action.payload);

    case TOGGLE_ITEM:
      // Toggle purchased status
      return state.map(item =>
        item.id === action.payload
          ? { ...item, purchased: !item.purchased }
          : item
      );

    default:
      return state;
  }
};

export default itemsReducer;
