import { useEffect } from "react";
import { useExpense } from "../../../Context/ExpensesContext";
import "./Expenses.css";

const Expenses = () => {
  const { expenses, removeExpense,loadExpenses } = useExpense();
  // console.log("from context" , expenses);
  useEffect(()=>{
  loadExpenses();
 },[loadExpenses]);



  const deleteProductHandler = (index) => {
    removeExpense(index);
  };
  // console.log("ecpeses", expenses);

  return (
    <div className="displaybox">
      <ul className="product_details">
        {expenses.map((product) => {
          return (
            <li key={product.id}>
              <span>Category : {product.category}</span>
              <span>Description: {product.dsc}</span>
              <span>Money : {product.money}</span>

              <button
                onClick={() => {
                  deleteProductHandler(product.id);
                }}
              >
                Remove
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Expenses;
