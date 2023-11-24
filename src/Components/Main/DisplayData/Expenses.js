import { useEffect } from "react";
// import { useExpense } from "../../../Context/ExpensesContext";
import "./Expenses.css";
import { useDispatch, useSelector } from "react-redux";
import { editData,  getData, removeData } from "../../../Store/Expenses";

const Expenses = () => {
  // const { expenses, removeExpense,loadExpenses,editExpense } = useExpense();
  const expensesList = useSelector((state) => state.Expenses);
  console.log(expensesList ,"expese list")
  const dispatch = useDispatch();
  const expenses = expensesList.expenses;

  

  console.log("from context", expenses);
  useEffect(() => {
    // loadExpenses();
    dispatch(getData());
 
    // dispatch(expenseAction.loadExpenses());
  }, [dispatch]);


  const deleteProductHandler = (id) => {
    // removeExpense(index);
    // dispatch(expenseAction.removeExpense({id : index}));
    dispatch(removeData(id));
  };
  const editProductHandler = (id) => {
    //  editExpense(id);
    // dispatch(expenseAction.editExpense({id : id}));
    dispatch(editData(id));
  };

  return (
    <div className="displaybox">
      <ul className="product_details">
        {expenses.map((product) => {
   
          return (
            <li
              key={product.id}
              className={`${expensesList.isLight ? "" : "li-dark"}`}
            >
              <span>Category : {product.category}</span>
              <span>Description: {product.dsc}</span>
              <span>Money : {product.money}</span>
              <div className="btn-container">
                <button
                  onClick={() => {
                    deleteProductHandler(product.id);
                  }}
                  className={`${expensesList.isLight ? "light" : "dark"}`}
                >
                  Remove
                </button>
                <button
                  onClick={() => {
                    editProductHandler(product.id);
                  }}
                  className={`${expensesList.isLight ? "light" : "dark"}`}
                >
                  Edit
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <h5 className="light total ">Total Price : {expensesList.totalExpenses}{expensesList.totalExpenses > 100000 && <span className="fw-lighter text-warning">      You are premium user Now</span> }</h5>
    </div>
  );
};
export default Expenses;
