import { useEffect } from "react";
// import { useExpense } from "../../../Context/ExpensesContext";
import "./Expenses.css";
import { useDispatch, useSelector } from "react-redux";
import { editData, expenseAction, getData, removeData } from "../../../Store/Expenses";

const Expenses = () => {
  // const { expenses, removeExpense,loadExpenses,editExpense } = useExpense();

  const dispatch = useDispatch();
  const expenses = useSelector(state=>state.Expenses.expenses);
  
  console.log("from context" , expenses);
  useEffect(()=>{
  // loadExpenses();
  dispatch(getData());
  // dispatch(expenseAction.loadExpenses());
 },[dispatch]);



  const deleteProductHandler = (id) => {
    // removeExpense(index);
    // dispatch(expenseAction.removeExpense({id : index}));
    dispatch(removeData(id));
  };
  const editProductHandler =(id)=>{
  //  editExpense(id);
  // dispatch(expenseAction.editExpense({id : id}));
  dispatch(editData(id));
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
