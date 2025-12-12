import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as actions from '../src/actions/items';
import { ADD_ITEM } from '../src/actions/types';

const middlewares = [thunk];
const mockStore = configureStore(middlewares);

describe('items actions', () => {
  it('addItem dispatches ADD_ITEM', async () => {
    const store = mockStore({ items: [] });
    // addItem is a thunk that may throw; call and catch if it throws.
    await store.dispatch(actions.addItem('Bread', 2));
    const dispatched = store.getActions();
    expect(dispatched[0].type).toBe(ADD_ITEM);
    expect(dispatched[0].payload.name).toBe('Bread');
    expect(dispatched[0].payload.quantity).toBe(2);
  });
});
