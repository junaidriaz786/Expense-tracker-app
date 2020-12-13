import React, {useContext} from 'react';
import {TransContext} from '../contexts/GlobalState';


function Balance (){
    
    const transactions = useContext(TransContext);

    const amounts = transactions.transaction;

    const getBalance = () => {
        let balance = 0;
        for (var i = 0; i < amounts.length; i++) {
                  balance = balance + amounts[i].amount
        }
        return balance;
        
    }
   
    return(
        <div className="balance">
        <h3 className="current-bal">Current Balance</h3>
        <h2 className="amount-bal">Rs.{getBalance()}</h2>
        </div>
    )
}

export default Balance;
