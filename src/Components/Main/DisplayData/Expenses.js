import { useEffect } from "react";
import { useExpense } from "../../../Context/ExpensesContext";
import "./Expenses.css";

const Expenses = () => {
  const { expenses, removeExpense,loadExpenses,editExpense } = useExpense();
  // console.log("from context" , expenses);
  useEffect(()=>{
  loadExpenses();
 },[loadExpenses]);



  const deleteProductHandler = (index) => {
    removeExpense(index);
  };
  const editProductHandler =(id)=>{
   editExpense(id);
  }


  return (
    <div className="displaybox">
      <ul className="product_details">
        {expenses.map((product) => {
          return (
            <li key={product.id}>
              <span>Category : {product.category}</span>
              <span>Description: {product.dsc}</span>
              <span>Money : {product.money}</span>
            <div className="btn-container">
              <button
                onClick={() => {
                  deleteProductHandler(product.id);
                }}
              >
                Remove
              </button>
              <button
                onClick={() => {
                  editProductHandler(product.id);
                }}
              >
                Edit
              </button>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Expenses;
