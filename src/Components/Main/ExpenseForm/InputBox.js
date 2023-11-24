// import { useExpense } from "../../../Context/ExpensesContext";
import { useDispatch, useSelector } from "react-redux";
import "./InputBox.css";
import { useEffect, useState } from "react";
import { addData, expenseAction } from "../../../Store/Expenses";

const InputBox = () => {
  const dispatch = useDispatch();
  const expenses = useSelector((state) => state.Expenses);
  const editedExpense = expenses.editedExpense;

  console.log("inputbox" ,editedExpense)
  const [money, setMoney] = useState(0);
  const [dsc, setDsc] = useState("");
  const [category, setCategory] = useState("");
  // const { addExpense ,editedExpense } = useExpense();
  const formSubmitHandler = async(e) => {
    e.preventDefault();
    const obj = {
      money: money,
      dsc: dsc,
      category: category,
    };
    // addExpense(obj);
    // dispatch(expenseAction.addExpense({expense : obj}));
    dispatch(addData(obj));
    setMoney(0);
    setDsc('')
    setCategory('')
  };
  useEffect(()=>{
    if(Object.keys(editedExpense).length > 0){
      setCategory(editedExpense.category);
      setMoney(editedExpense.money);
      setDsc(editedExpense.dsc);
    }
  },[editedExpense]);
  return (
    <div className={`d-flex justify-content-center  vh-50  ${expenses.isLight ? "bg-light" : "bg-dark"}`}>
      <form className={`${expenses.isLight ? "form-light" : "form-dark"}`}  onSubmit={formSubmitHandler}>
        <div className="input_container">
          <label  className={`${expenses.isLight ? "lable-light" : "lable-dark"}`}  htmlFor="money">Money</label>
          <input
           className={`${expenses.isLight ? "input-light" : "input-dark"}`}
            type="number"
            id="money"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            required
          />
        </div>
        <div className="input_container">
          <label className={`${expenses.isLight ? "lable-light" : "lable-dark"}`} htmlFor="dsc">Description</label>
          <input
             className={`${expenses.isLight ? "input-light" : "input-dark"}`}
            type="text"
            id="dsc"
            value={dsc}
            onChange={(e) => setDsc(e.target.value)}
            required
          />
        </div>
        <div className="input_container">
          <label   className={`${expenses.isLight ? "lable-light" : "lable-dark"}`} htmlFor="category">Category</label>
          <input
             className={`${expenses.isLight ? "input-light" : "input-dark"}`}
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <button  className={`${expenses.isLight ? "form-btn-light" : "form-btn-dark"}`} type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default InputBox;
