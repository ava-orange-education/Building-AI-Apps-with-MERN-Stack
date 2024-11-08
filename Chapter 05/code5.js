import { createStore } from 'redux';

  // Define initial state
  const initialState = { count: 0 };

  // Define reducer
  function counterReducer(state = initialState, action) {
    switch (action.type) {
      case 'INCREMENT':
        return { count: state.count + 1 };
      case 'DECREMENT':
        return { count: state.count - 1 };
      default:
        return state;
    }
  }

  // Create Redux store
  const store = createStore(counterReducer);

  // Define action creators
  const increment = () => ({ type: 'INCREMENT' });
  const decrement = () => ({ type: 'DECREMENT' });

  // Dispatch actions
  store.dispatch(increment());
  store.dispatch(decrement());

  console.log(store.getState()); // { count: 0 }
