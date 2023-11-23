import { useState } from 'react';
import InputBox from './ExpenseForm/InputBox';
import Alert from './alert'
import './Mainpage.css'
import Expenses from './DisplayData/Expenses';
function MainPage() {
  const [complete , setComplete] = useState(false);

  const onCompleteProfile = ()=>{
    setComplete(true);
  }
 
  return (
    <div className='main'>
    <Alert onCompleteProfile={onCompleteProfile}/>    
    {complete && <InputBox/>}
    {complete && <Expenses/>}
    </div>
  );
}

export default MainPage;
