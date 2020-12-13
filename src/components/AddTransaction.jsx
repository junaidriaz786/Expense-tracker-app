import React, {useState, useContext} from 'react';
import {TransContext} from '../contexts/GlobalState.jsx';


function AddTransaction(){
    const {transactions, addTransaction} = useContext(TransContext);
    
    
    let [amount, setAmount] = useState();
    let [description, setDescription] = useState("");
    
    const handleAddition = (event) => {
        event.preventDefault();
        if (Number(amount) === 0) {
            alert("Please enter correct value");
            return false;
        }
        addTransaction({
            amount: Number(amount),
            description: description.toUpperCase()
        });

        setDescription('');
        setAmount('')
    }


    return (
        <div>
            <h3>Add New Transaction</h3>
            <hr/>
            <form onSubmit={handleAddition}>

                <div className="form-control">
                 <label htmlFor="description">Description</label>
                <input type="text" placeholder="Enter Description"
                id="description" 
                onChange={(e)=> setDescription(e.target.value)} 
                value={description}
                required
                
                />
                </div>
                
                <div className="form-control">
                <label htmlFor="transactionamount">Amount <br/><span className="small-text">(For Income, +ve Amount & For Expense, -ve Amount)</span></label>
                <input type="number" 
                placeholder="Enter Amount" 
                id="amount" 
                onChange={(e)=> setAmount(e.target.value)}      
                value={amount}        
                required
                />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </div>
    )
}

export default AddTransaction;
