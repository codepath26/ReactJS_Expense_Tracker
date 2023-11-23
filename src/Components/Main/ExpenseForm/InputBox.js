import { useExpense } from "../../../Context/ExpensesContext";
import "./InputBox.css";
import { useState } from "react";

const InputBox = () => {
  const [money, setMoney] = useState(0);
  const [dsc, setDsc] = useState("");
  const [category, setCategory] = useState("");
  const { addExpense } = useExpense();
  const formSubmitHandler = (e) => {
    e.preventDefault();
    const obj = {
      id: Date.now(),
      money: money,
      dsc: dsc,
      category: category,
    };
    addExpense(obj);
    setMoney(0);
    setDsc('')
    setCategory('')
  };
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
