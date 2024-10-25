import React, { useState } from "react";

function App ()  {
const [count, setCount] = useState(0);

function decreamentHandler() {
  setCount(count-1);
}

function increamentHandler() {
  setCount(count+1);
}

function resetHandler() {
  setCount(0);
}


  return (
    <div className="w-[100vw] h-[100vh] flex justify-center items-center flex-col gap-10 bg-[#ecd0ea]">

      <div className="font-medium text-2xl text-[#3a9ec9]">Increament & Decreament</div>

      <div className="bg-white flex justify-center gap-12 py-3 rounded-sm text-[25px] text-[#404e4d]">
        <button onClick= {decreamentHandler} className="border-r-2 text-center w-20 border-[#bfbfbf] text-5xl">-</button>
        
        <div className="font-bold gap-12 text-5xl">{count}</div>

        <button onClick= {increamentHandler} className="border-l-2 text-center w-20 border-[#bfbfbf] text-5xl">+</button>
      </div> 
      
      <button onClick= {resetHandler} className="text-white px-5 py-2 rounded-sm text-lg bg-[#10DDD0]">Reset</button>
    </div>
  )
  
};

export default App;
