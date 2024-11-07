import { combineReducers } from 'redux';

const usersReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_USER':
      return [...state, action.payload];
    default:
      return state;
  }
};

const activitiesReducer = (state = [], action) => {
  switch (action.type) {
    case 'ADD_ACTIVITY':
      return [...state, action.payload];
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  users: usersReducer,
  activities: activitiesReducer
});

const store = createStore(rootReducer);
