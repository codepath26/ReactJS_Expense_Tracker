// import { useExpense } from "../../../Context/ExpensesContext";
import { useDispatch, useSelector } from "react-redux";
import "./InputBox.css";
import { useEffect, useState } from "react";
import { addData, expenseAction } from "../../../Store/Expenses";

const InputBox = () => {
  const dispatch = useDispatch();
  const editedExpense = useSelector(state =>state.Expenses.editedExpense);
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
    <div className="d-flex justify-content-center  vh-50">
      <form onSubmit={formSubmitHandler}>
        <div className="input_container">
          <label htmlFor="money">Money</label>
          <input
            type="number"
            id="money"
            value={money}
            onChange={(e) => setMoney(e.target.value)}
            required
          />
        </div>
        <div className="input_container">
          <label htmlFor="dsc">Description</label>
          <input
            type="text"
            id="dsc"
            value={dsc}
            onChange={(e) => setDsc(e.target.value)}
            required
          />
        </div>
        <div className="input_container">
          <label htmlFor="category">Category</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <button type="submit">Add Data</button>
      </form>
    </div>
  );
};

export default InputBox;
