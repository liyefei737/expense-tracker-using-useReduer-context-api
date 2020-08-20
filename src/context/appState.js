import React, { createContext, useReducer } from 'react'
import AppReducer from "../AppReducer";
import ACTION_STRS from "../ACTION_STRS";

//TODO load state from back ends
const initialState = {
    transactions: [
        { id: 1, text: 'Flower', amount: -20 },
        { id: 2, text: 'Salary', amount: 300 },
        { id: 3, text: 'Book', amount: -10 },
        { id: 4, text: 'Camera', amount: 150 }
    ]
};


export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    //actions
    const ACTIONS = {
        deleteTrxn(id) {
            dispatch({ type: ACTION_STRS.DELETE_TRANSACTION, id });
        }

    };

    return <GlobalContext.Provider value={{ transactions: state.transactions, ACTIONS }}>
        {children}
    </GlobalContext.Provider>
}