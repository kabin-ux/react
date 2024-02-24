import { useMemo, useState } from 'react';
import './App.css';

function App() {
  const[height, setHeight] = useState();
  const [weight, setWeight] = useState();

  const result = useMemo(() => {
    return (
      (weight/((height*height)/10000)).toFixed(2)
    )
  },[weight,height]);
   
  console.log(result);

  return (
    <div className='main'>
      <div className='container'>
        <h1>BMI Calculator </h1>
        <p className='weight'>Weight: {weight}</p>
        <input type='number' className='weight' onChange={(e) => setWeight(e.target.value)} />

        <p className='height'>Height (in cm) {height}</p>
        <input type='number' className='height' onChange={(e)=>setHeight(e.target.value)}/>

        <p className='result'>Your BMI score: {result}</p>
      </div>
    </div>
  );
}

export default App;
