import {createSlice} from '@reduxjs/toolkit';

export const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
  },
  reducers: {
    addToCart: (state, action) => {
      const itemToAdd = state.cart.find(item => item.id === action.payload.id);
      if (itemToAdd) {
        itemToAdd.quantity++;
      } else {
        state.cart.push({...action.payload, quantity: 1});
      }
    },
    removeFromCart: (state, action) => {
      const itemToRemove = state.cart.filter(
        item => item.id !== action.payload.id,
      );
      state.cart = [...itemToRemove];
    },
    incrementQuantity: (state, action) => {
      const itemToAdd = state.cart.find(item => item.id === action.payload.id);
      if (itemToAdd) {
        itemToAdd.quantity++;
      }
    },
    decrementQuantity: (state, action) => {
      const itemToAdd = state.cart.find(item => item.id === action.payload.id);
      if (itemToAdd && itemToAdd.quantity === 1) {
        const itemToRemove = state.cart.filter(
          item => item.id !== action.payload.id,
        );
        state.cart = [...itemToRemove];
      } else if (itemToAdd) {
        itemToAdd.quantity--;
      }
    },
  },
});

export const {addToCart, removeFromCart, incrementQuantity, decrementQuantity} =
  cartSlice.actions;

export default cartSlice.reducer;
