import React from 'react';
import Header from './components/Header';

import './App.css';
import Balance from './components/Balance';
import IncomeExpenses from './components/IncomeExpenses';
import TransactionList from './components/TransactionList';
import AddTranscation from './components/AddTranscation';
import { GlobalProvider } from './context/GlobalState';

const App = () => {
  return (
    <GlobalProvider>
      <Header />
      <div className='container'>
        <Balance />
        <IncomeExpenses />
        <TransactionList />
        <AddTranscation />
      </div>
    </GlobalProvider>
  );
};

export default App;
