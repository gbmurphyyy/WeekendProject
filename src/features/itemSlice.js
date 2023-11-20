const {createSlice} = require('@reduxjs/toolkit');

const initialState = {items: []};

const itemSlice = createSlice({
  name: 'item',
  initialState,
  reducers: {
    request: state => {
      state.isFetching = true;
    },
    success: (state, action) => {
      state.isFetching = false;

      if (Array.isArray(action.payload)) {
        state.items = action.payload;
      } else {
        state.items = [...state.items, action.payload];
      }

      state.failure = false;
      state.errorMessage = {};
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.errorMessage = action.payload;
      state.failure = true;
    },
    addItem: (state, action) => {
      const itemToAdd = action.payload;

      state.items.push(itemToAdd);
    },
  },
});

export const itemActions = itemSlice.actions;

export default itemSlice.reducer;

// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// // Sample async thunk for fetching items
// export const fetchItems = createAsyncThunk('item/fetchItems', async () => {
//   // API call or any asynchronous logic
//   const response = await api.fetchItems();
//   return response.data;
// });

// const initialState = {
//   items: [],
//   isFetching: false,
//   failure: false,
//   errorMessage: '',
// };

// const itemSlice = createSlice({
//   name: 'item',
//   initialState,
//   reducers: {
//     addItem: (state, action) => {
//       const itemToAdd = action.payload;
//       state.items.push(itemToAdd);
//     },
//     deleteItem: (state, action) => {
//       const itemIdToDelete = action.payload;
//       state.items = state.items.filter(item => item.id !== itemIdToDelete);
//     },
//   },
//   extraReducers: builder => {
//     builder;
//     request(fetchItems.pending, state => {
//       state.isFetching = true;
//     });
//     success(fetchItems.fulfilled, (state, action) => {
//       state.isFetching = false;
//       state.items = action.payload;
//       state.failure = false;
//       state.errorMessage = '';
//     });
//     failure(fetchItems.rejected, (state, action) => {
//       state.isFetching = false;
//       state.errorMessage = action.error.message;
//       state.failure = true;
//     });
//   },
// });

// export const itemActions = itemSlice.actions;
// export default itemSlice.reducer;
