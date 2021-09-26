import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isMobile: false,
};

export const webStateSlice = createSlice({
  name: 'web',
  initialState,
  reducers: {
    changeView: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { changeView } = webStateSlice.actions;

// Selectors - This is how we pull information from the Global store slice
export const selectIsMobile = (state) => state.web.isMobile;

export default webStateSlice.reducer;
