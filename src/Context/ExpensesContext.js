
import React, { createContext, useContext, useState } from 'react'
const ProductContext = createContext({
  expenses : [],
  addExpense : (expense)=>{},
  removeExpense : (id)=>{},
});
export const useExpense = ()=>{
  return useContext(ProductContext);
}
function ProductsProvider({children}) {
  const [expenses , setExpenses] = useState([]);
  const addExpense = (expense)=>{
    console.log("add ex" ,expense)
    setExpenses(prevExpenses=>{
      return prevExpenses.concat(expense);
    });
  }
  const removeExpense = (id)=>{
    setExpenses(prevExpense =>{
      let expenses = [...prevExpense];
       return expenses.filter(expense =>expense.id !== id);
    })
  }
  return (
    <ProductContext.Provider value={{expenses , addExpense , removeExpense}}>
      {
        children
      }
    </ProductContext.Provider>
  )
}

export default ProductsProvider;
