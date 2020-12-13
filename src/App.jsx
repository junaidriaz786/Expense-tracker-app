import React from 'react';
import './App.css';

// import components

import Header from './components/Header';
import Balance from './components/Balance';
import AccountSummary from './components/AccountSummary.jsx';
import TransactionHistory from './components/TransactionHistory';
import AddTransaction from './components/AddTransaction';
import {TransactionProvider} from '../src/contexts/GlobalState'



function App() {
  
  return(
<TransactionProvider>
    <Header />
    <div className="container">
      <Balance />
      <AccountSummary />
      <TransactionHistory />
      <AddTransaction />
    </div>
    </TransactionProvider>
    
  )
}
export default App;
