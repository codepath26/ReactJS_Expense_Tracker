import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";




export const getData = createAsyncThunk('getData' ,async ()=>{
  const response = await axios.get(`${process.env.REACT_APP_FIREBASE_URL}expenses.json`);
  console.log(response.data); 
  return response.data;

})

export const addData = createAsyncThunk("addData" , async(expense)=>{
  try {
    const response = await axios.post(`${process.env.REACT_APP_FIREBASE_URL}expenses.json`,expense);
    console.log(response.data.name);
    const newExpense = { ...expense, id: response.data.name };
      return newExpense;
  } catch (err) {
    console.log(err);
  }
})
export const removeData = createAsyncThunk('removeData' , async(id)=>{
  try{

    const response = await axios.delete(`${process.env.REACT_APP_FIREBASE_URL}expenses/${id}.json`);
    console.log(response , "from deleted data remove data");
    return id;
  }catch(err){
    console.log(err);
  }

})
export const editData = createAsyncThunk('editData' , async(id)=>{
  try{
    const response = await axios.delete(`${process.env.REACT_APP_FIREBASE_URL}expenses/${id}.json`);
    console.log(response , "from deleted data remove data");
    return id;
  }catch(err){
    console.log(err);
  }

})

const expensesInitialState = {
  expenses: [],
  editedExpense: {},
  isLoading : false,
  isError : false,
  isLight : true,

  totalExpenses : 0
};
const ExpenseSlice = createSlice({
  name: "expensesList",
  initialState: expensesInitialState,
  reducers: {
    toggleTheme (state , action){
      state.isLight = !state.isLight;
    },
  },
  extraReducers : (builder)=>{
    builder.addCase(getData.pending , (state , action)=>{
       state.isLoading = true;
    })
    builder.addCase(getData.fulfilled , (state , action)=>{
      if(action.payload){
        state.isLoading = false;
        const expensesObject = action.payload;
        const ids =   Object.keys(expensesObject);
        const values =  Object.values(expensesObject);
      // console.log(ids)
      // console.log(values)
      state.expenses = values.map((obj, index) => ({
        ...obj,
        id: ids[index],
      }));
      // console.log(state.expenses)
      const totalPrice = state.expenses.reduce((acc , total)=>acc + Number(total.money),0);
      state.totalExpenses = totalPrice ;
    }else{
      state.expenses = [];
    }
    });
    builder.addCase(getData.rejected , (state , action)=>{
      console.log("Error" , action.payload)
      state.isError = true;
    });
    builder.addCase(addData.fulfilled,(state,action)=>{
      // console.log(action.payload.money)
      state.totalExpenses = state.totalExpenses + Number(action.payload.money)
      state.expenses = state.expenses.concat(action.payload);
    })
    builder.addCase(addData.rejected ,(action)=>{
      console.log(action.payload);
    });
    builder.addCase(removeData.fulfilled , (state , action)=>{
      const id = action.payload;
    const expense = state.expenses.find((expense) => expense.id !== id);
    console.log(expense.money);
    state.totalExpenses -= expense.money;
    state.expenses = state.expenses.filter((expense) => expense.id !== id);
    });
    builder.addCase(removeData.rejected , (action)=>{
       console.log(action.payload , "removedata");
    });
    builder.addCase(editData.fulfilled , (state ,action)=>{
      const id = action.payload;
      console.log(id)
      state.editedExpense = state.expenses.find((expense) => expense.id === id);
      state.totalExpenses -= Number(state.editedExpense.money)
      state.expenses = state.expenses.filter((expense) => expense.id !== id);
    });
    builder.addCase(editData.rejected , (action)=>{
       console.log(action.payload , "editData");
    });
  }
});


export const expenseAction = ExpenseSlice.actions; 
export default ExpenseSlice.reducer ;
