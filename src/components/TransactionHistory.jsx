import React, { useContext, useState } from 'react';
import {TransContext} from '../contexts/GlobalState.jsx';

function TransactionHistory() {

    const transactions  = useContext(TransContext);
    const {delTransaction} = useContext(TransContext);

    const handleDeletion = (index) => {
        delTransaction(index)
    }
    return (
        <div>
            <h3>Transaction History</h3>
            <hr />
            <ul className="list">
                {transactions.transaction.map((transObj, ind) => {
                    return(
                        <li key={ind}>
                            {transObj.description}    
                            <span>{transObj.amount}</span>
                        <button onClick={ () => handleDeletion(ind) } className="delete-btn">X</button>
                        </li>
                    )
                })}
                   
                   
            </ul>
        </div>
    )
}

export default TransactionHistory;