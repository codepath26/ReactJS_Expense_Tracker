
import axios from 'axios';
import React, { createContext, useContext, useState } from 'react'
const ProductContext = createContext({
  expenses : [],
  addExpense : (expense)=>{},
  removeExpense : (id)=>{},
  loadExpenses:(expenses)=>{},
});
export const useExpense = ()=>{
  return useContext(ProductContext);
}
function ProductsProvider({children}) {
  const [expenses , setExpenses] = useState([]);
  const addExpense = async(expense)=>{
    // console.log("add ex" ,expense)
    try{
      const response =await axios.post(`${process.env.REACT_APP_FIREBASE_URL}expenses.json`,expense);
      // console.log(response.data.name);
      const newExpense = {...expense , id : response.data.name}
      setExpenses((prevExpenses)=>{
        return prevExpenses.concat(newExpense);
      });
    }catch(err){
      console.log(err);
    }
  }
  const removeExpense =async (id)=>{
    // const response =await axios.post(`${process.env.REACT_APP_FIREBASE_URL}expenses.json`);
    setExpenses(prevExpense =>{
      let expenses = [...prevExpense];
       return expenses.filter(expense =>expense.id !== id);
    })
  }
  const loadExpenses=async ()=>{
      const response =await axios.get(`${process.env.REACT_APP_FIREBASE_URL}expenses.json`);
      // console.log(response.data);
      const  expensesObject = response.data;
      const ids = Object.keys(expensesObject);
      const values = Object.values(expensesObject);
      // console.log(ids)
        const newExpenses = values.map((obj,index)=>(
          {...obj , id : ids[index]}
        ));
       setExpenses(newExpenses);
  }

  return (
    <ProductContext.Provider value={{expenses , addExpense , removeExpense,loadExpenses }}>
      {
        children
      }
    </ProductContext.Provider>
  )
}

export default ProductsProvider;
