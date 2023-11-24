import { createSlice } from "@reduxjs/toolkit";

const authInitialState = {
  token : '',
  userIsLoggedIn : true,
}
const authSlice = createSlice({
  name : "Authenticate",
  initialState : authInitialState,
  reducers : {
    login (state,action){
      console.log("ths= is  working now")
      console.log(typeof action.payload.token)
     localStorage.setItem('token',action.payload.token);
     state.token = action.payload.token;
     state.userIsLoggedIn = true;
     console.log(state.userIsLoggedIn , state.token)
    },
    logout (state){
      state.token = null;
      state.userIsLoggedIn = false;
      localStorage.removeItem('token');

    },
  }
});

export const authAction= authSlice.actions;
export default authSlice.reducer;