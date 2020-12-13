import React, {useContext} from 'react';
import {TransContext} from '../contexts/GlobalState.jsx';



function AccountSummary() {
    
    const transactions = useContext(TransContext);
    
    const amounts = transactions.transaction;
    

    const getIncome = () => {
        let income = 0;
        for (var i = 0; i < amounts.length; i++) {
                  if (amounts[i].amount > 0)
                    income = income + amounts[i].amount
        }
        return income;
        
    }
    
    
    const getExpense = () => {
        let expense = 0;
        for (var i = 0; i < amounts.length; i++) {
                  if (amounts[i].amount < 0)
                    expense = expense + amounts[i].amount
        }
        return expense;
        
    }
    return (
        <div className="accountsummary">
            <div>
                <h4>Income</h4>
                <p className="income money plus">
                    {getIncome()}
                   </p>

            </div>

            <div>
                <h4>Expense</h4>
                <p className="expense money minus">
                {getExpense()}
                </p>
            </div>
        </div>
    )
}

export default AccountSummary;
