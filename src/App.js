import React from 'react';
import './App.css';
import Left from './Left';
import Top from './Top';
import Demo from './Demo';

function App() {
  return (
    <div className="flex flex-row ">
      <div className="w-1/2  h-screen left_bg">
      <Left />
      </div>
      <div className="w-1/2 p-4 right_bg">
        
        <Top />
        <Demo />
       
      </div>
    </div>
  );
}

export default App;
