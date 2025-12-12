import itemsReducer from '../src/reducers/itemsReducer';
import { ADD_ITEM, EDIT_ITEM, DELETE_ITEM, TOGGLE_PURCHASED } from '../src/actions/types';

describe('itemsReducer', () => {
  it('adds an item', () => {
    const state = { items: [] };
    const action = { type: ADD_ITEM, payload: { id: '1', name: 'Milk', quantity: 1, purchased: false } };
    const next = itemsReducer(state, action);
    expect(next.items.length).toBe(1);
    expect(next.items[0].name).toBe('Milk');
  });

  it('edits an item', () => {
    const state = { items: [{ id: '1', name: 'Milk', quantity: 1, purchased: false }] };
    const action = { type: EDIT_ITEM, payload: { id: '1', fields: { name: 'Almond Milk', quantity: 2 } } };
    const next = itemsReducer(state, action);
    expect(next.items[0].name).toBe('Almond Milk');
    expect(next.items[0].quantity).toBe(2);
  });

  it('deletes an item', () => {
    const state = { items: [{ id: '1', name: 'Milk' }] };
    const action = { type: DELETE_ITEM, payload: '1' };
    const next = itemsReducer(state, action);
    expect(next.items.length).toBe(0);
  });

  it('toggles purchased', () => {
    const state = { items: [{ id: '1', name: 'Milk', purchased: false }] };
    const action = { type: TOGGLE_PURCHASED, payload: '1' };
    const next = itemsReducer(state, action);
    expect(next.items[0].purchased).toBe(true);
  });
});
