import React from 'react';
  import ReactDOM from 'react-dom';
  import { Provider, connect } from 'react-redux';
  import { createStore } from 'redux';

  // Define initial state and reducer
  const initialState = { count: 0 };
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

  // Define Counter component
  function Counter({ count, increment, decrement }) {
    return (
      <div>
        <p>Count: {count}</p>
        <button onClick={increment}>+</button>
        <button onClick={decrement}>-</button>
      </div>
    );
  }

  // Map state and dispatch to props
  const mapStateToProps = (state) => ({ count: state.count });
  const mapDispatchToProps = { increment, decrement };

  // Connect Counter component to Redux store
  const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

  // Render the app
  ReactDOM.render(
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>,
    document.getElementById('root')
  );
