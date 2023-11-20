const {createSlice} = require('@reduxjs/toolkit');

const initialState = {};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    request: (state, action) => {
      state.isFetching = true;
    },
    success: (state, action) => {
      if (action.payload.userId) {
        state.data = {...action.payload, accessToken: action.payload.id};
        delete state.data.id;
      } else {
        state.data = action.payload;
      }

      state.isFetching = false;
      state.failure = false;
      state.errorMessage = {};
    },
    failure: (state, action) => {
      state.isFetching = false;
      state.failure = true;
      state.errorMessage = action.payload;
    },
    logout: state => {
      state.data = {};
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;

// import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
// import {api} from '../helper/ApiHelper';

// // Sample async thunk for login
// export const loginUser = createAsyncThunk(
//   'user/login',
//   async (credentials, {rejectWithValue}) => {
//     // API call or any asynchronous logic
//     try {
//       const response = await api.post('/login', credentials, {}, 5000); // Adjust the URL and parameters based on your actual login endpoint
//       return response.data;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   },
// );

// const initialState = {
//   data: {},
//   isFetching: false,
//   failure: false,
//   errorMessage: {},
// };

// const userSlice = createSlice({
//   name: 'user',
//   initialState,
//   reducers: {},
//   extraReducers: builder => {
//     builder;
//     request(loginUser.pending, state => {
//       state.isFetching = true;
//     });
//     success(loginUser.fulfilled, (state, action) => {
//       const {userId, id, ...userData} = action.payload;

//       state.data = userId ? {...userData, accessToken: id} : action.payload;

//       state.isFetching = false;
//       state.failure = false;
//       state.errorMessage = {};
//     });
//     failure(loginUser.rejected, (state, action) => {
//       state.isFetching = false;
//       state.failure = true;
//       state.errorMessage = action.payload; // Use action.payload for the rejectedWithValue case
//     });
//   },
// });

// export const {request, success, failure, logout} = userSlice.actions;
// export default userSlice.reducer;
