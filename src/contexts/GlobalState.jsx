import React, { createContext, useContext, useReducer} from 'react';
import AppReducer from './AppReducer';


const initialTransaction = [
    
]

export const TransContext = createContext(initialTransaction);


export const TransactionProvider = ({children}) => {
    let [state, dispatch] = useReducer(AppReducer, initialTransaction);

    function addTransaction(transObj){
        dispatch(
            {
                type: "Add",
                payload : {
                    amount: transObj.amount,
                    description: transObj.description
                }})}
    function delTransaction(index){
        dispatch(
            {
                type: "Delete",
                payload: index
            }
        )
    }
                

    return(
        <TransContext.Provider value={{
            transaction : state,
            addTransaction,
            delTransaction
        }}>
            {children}
        </TransContext.Provider>
    )        

}

