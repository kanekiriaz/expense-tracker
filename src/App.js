import './App.css';
import React from 'react';
import Headerfile from './Components/Headerfile';
import Balance from './Components/Balance';
import IncomeExpense from './Components/IncomeExpense';
import TransactionList from './Components/TransactionList';
import AddTransaction from './Components/AddTransaction';
import {GlobalProvider} from './context/GlobalState';

function App() {
  return (
    <GlobalProvider>
        <Headerfile />
          <div className="container">
          <Balance />
          <IncomeExpense/>
          <TransactionList/>
          <AddTransaction/>
        </div>
        
        
    </GlobalProvider>
  );
}

export default App;
