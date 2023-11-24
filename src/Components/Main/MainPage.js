import { useState } from "react";
import InputBox from "./ExpenseForm/InputBox";
import Alert from "./alert";
import "./Mainpage.css";
import Expenses from "./DisplayData/Expenses";
import { useSelector } from "react-redux";
function MainPage() {
  const [complete, setComplete] = useState(false);
  const expenses = useSelector((state) => state.Expenses);

  const onCompleteProfile = () => {
    setComplete(true);
  };

  return (
    <div className={`main ${expenses.isLight ? "bg-light" : "bg-dark"}`}>
      <Alert onCompleteProfile={onCompleteProfile} />
      {complete && <InputBox />}
      {complete && <Expenses />}
    </div>
  );
}

export default MainPage;
