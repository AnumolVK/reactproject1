import logo from './logo.svg';
import './App.css';
import Form from './components/Form';
import BmiScore from './components/BmiScore';
import BmiList from './components/BmiList';
import { useState } from 'react';


function App() {

  //let bmi=18;
const [bmi,setBmi]=useState(18);
  const changeBmi = ()=>{
    //bmi=19;
  }
  return (
   
    <div>
   
   <div>BMI Calculator</div>
   bmi is {bmi}
   <br/>
   <button onClick={changeBmi}>click</button>
   <Form/>
   <BmiScore/>
   <BmiList/>
   </div>
  );
}

export default App;