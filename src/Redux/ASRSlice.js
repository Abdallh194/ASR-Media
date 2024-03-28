import { createSlice } from "@reduxjs/toolkit";

export const counterSlice = createSlice({
  name: "asr Media",
  initialState: {
    userName: "Abdallh Sabry Rakha",
    UserDetails: [
      {
        FirstName: "Abdallh",
        LastName: "Sabry Rakha",
        Phone: "01091415560",
        Email: "abdallhsabry194@gmail.com",
        Password: "1234",
      },
    ],
    isloggin: false,
  },
  reducers: {
    ActiveLoginn: (state) => {
      state.isloggin = true;
    },
    ActiveLogOut: (state) => {
      state.isloggin = false;
    },
    SignUpHandle: (state, action) => {
      while (state.UserDetails.length > 0) {
        state.UserDetails.pop();
      }
      state.UserDetails.push(action.payload);
    },
  },
});

// Action creators are generated for each case reducer function
export const { ActiveLoginn, ActiveLogOut, SignUpHandle } =
  counterSlice.actions;

export default counterSlice.reducer;
