import React from 'react';
import './App.css';
import Buttons from './Buttons';
import ChangeColor from './ChangeColor'

function App() {
  return (
    <div>
      <ChangeColor text='to jest pierwszy nagłówek' color='red' buttons={true}/>

    
      <ChangeColor text='to jest drugi nagłówek' color='blue' buttons={false}/>
      <ChangeColor text='to jest trzeci nagłówek' color='green' buttons={false}/>

   
    </div>

  );
}
export default App;
