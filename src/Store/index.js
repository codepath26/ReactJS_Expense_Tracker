import {configureStore} from '@reduxjs/toolkit'
import  AuthReducer from './Auth'
import CartReducer from './Cart';
import ExpenseReducer from './Expenses'




const store = configureStore({
  reducer  :{
    auth : AuthReducer,
    Cart : CartReducer,
    Expenses : ExpenseReducer,
  }
})

export default store;