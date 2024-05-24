import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  currentUser: null,
  error: null,
  onSubmit: false,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    signInStart: (state) => {
      state.onSubmit = true;
    },
    signInSuccess: (state, action) => {
      state.currentUser = action.payload;
      state.onSubmit = false;
      state.error = null;
    },
    signInFailure: (state, action) => {
      state.error = action.payload;
      state.onSubmit = false;
    },
  },
});

export const  {signInStart,signInSuccess,signInFailure}=userSlice.actions;

export default userSlice.reducer;