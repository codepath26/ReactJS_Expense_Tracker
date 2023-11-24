import { createSlice } from "@reduxjs/toolkit";
const localToken = localStorage.getItem('token');

const authInitialState = {
  token :localToken ||  '',
  userIsLoggedIn : !!localToken,
  displayName : '',
  emailVerified : false,
  photoUrl : '',
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
    updateProfile(state,action){
      console.log(action.payload);
    }
  }
});

export const authAction= authSlice.actions;
export default authSlice.reducer;