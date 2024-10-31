import { increment,decrement,reset ,incrementByAmount} from './features/counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';
import './App.css'
import { useState } from 'react';

function App() {
  const [amount,setAmount] = useState(0);
  const count = useSelector((state)=>{
    return state.counter.value;
  })
  const dispatch = useDispatch();

  function handleIncrementClick(){
    dispatch(increment());
  }

  function handleDecrementClick(){
    dispatch(decrement());
  }
  function handleResetClick(){
    dispatch(reset());
  }
  function handleChange(event){
    return setAmount(event.target.value);
  }
  function handleAmountClick(){
    dispatch(incrementByAmount(amount));
  }
  return (
    <div className='container'>
    <button onClick={handleIncrementClick}>+</button>
    <p>Count {count}</p>
    <button onClick={handleDecrementClick}>-</button>
    <button onClick={handleResetClick}>Reset</button>
    <input 
      type = "Number"
      value = {amount}
      placeholder='Enter Amount'
      onChange = {handleChange}
    />
    <br/>
    <button onClick={handleAmountClick}>Amount</button>
    </div>
  )
}

export default App;
