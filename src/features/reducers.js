import cart from './cartSlice';
import counter from './counterSlice';
import item from './itemSlice';
import user from './userSlice';

export default {
  cart: cart,
  counter: counter,
  item: item,
  user: user,
};

// import {combineReducers} from '@reduxjs/toolkit';
// import cartReducer from './cartSlice';
// import counterReducer from './counterSlice';
// import itemReducer from './itemSlice';
// import userReducer from './userSlice';

// const rootReducer = combineReducers({
//   cart: cartReducer,
//   counter: counterReducer,
//   item: itemReducer,
//   user: userReducer,
// });

// export default rootReducer;
