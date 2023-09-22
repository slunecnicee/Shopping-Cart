import {createSlice} from '@reduxjs/toolkit';

const initialState = {
    isLoading: true,
    isError: false,
    items: [],
  };
  
  const productsSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {
      addItems(state, action) {
        state.isLoading = false;
        state.isError = false;
        state.items = action.payload;
      },
    },
  });

export default productsSlice.reducer;
export const {addItems} =productsSlice.actions

