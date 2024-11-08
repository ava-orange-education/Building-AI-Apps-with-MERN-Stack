import React from 'react';
  import ReactDOM from 'react-dom';
  import { Provider } from 'react-redux';
  import store from './store';
  import App from './App';

  ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('root')
  );

// Creating the store:- 
// import { createStore } from 'redux';

// // Reducer function
// const rootReducer = (state = {}, action) => {
//   switch (action.type) {
//     case 'SOME_ACTION':
//       return { ...state, someProperty: action.payload };
//     default:
//       return state;
//   }
// };

// const store = createStore(rootReducer);

// export default store;


// Creating the App Component :-
// import React from 'react';

// function App() {
//   return (
//     <div>
//       <h1>Hello, World!</h1>
//     </div>
//   );
// }

// export default App;
