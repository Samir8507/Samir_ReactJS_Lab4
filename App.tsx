import React from 'react';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ShowList from './componants/ShowList';
import ExpenseTracker from './componants/ExpenseTracker';

function App() {
  const success = () => {
    return false
  }
  const cancel = () => {
    return false
  }
  return (
    <div className="App">
     <BrowserRouter>
      <Routes>
        <Route path='/' element={<ShowList></ShowList>}></Route>
        <Route path='/add' element={<ExpenseTracker onTrue={success} onClose={cancel}></ExpenseTracker>}></Route>

      </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
