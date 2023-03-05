import './App.css';
import { useState } from 'react';
import CountNumber from './components/CountNumber';


function App() {
  const [count, setCount] = useState(0);
  const [morning, setMorning] = useState(false);
  return (
    <div className='App'>
      <header className={`header-seaction ${morning ? "day" : "night"}`}>
        <h1>{morning ? "Good Morning!" : " Good Night!"}</h1>
        < CountNumber count={count} />      
        {/* <h2>{count}</h2> */}
      </header>
      <div className='mt'>
        <button onClick={()=> setCount(count + 1)}>Increment</button>
        <button onClick={()=> setCount(count - 1)}>Decrement</button>
      </div>
      <button className='mt' onClick={()=> setMorning(!morning)}>
        {morning ? "Dark Mode " : "Light Mode"}
      </button>
    </div>
  );
}

export default App;
