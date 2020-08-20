import React, { useState, useContext } from 'react'
import { GlobalContext } from "../context/appState";

export const AddTransaction = () => {
    const [text, setText] = useState("");
    const [amount, setAmount] = useState(0);

    const { ACTIONS } = useContext(GlobalContext);

    const getID = () => {
        //TOOD transaction id uniqueness
        // could use uuid lib
        return Math.floor(Math.random() * 1000000);
    }

    const addTrxn = (e) => {
        e.preventDefault();
        const newTransaction = {
            id: getID(),
            text,
            amount
        }
        ACTIONS.addTrxn(newTransaction);
    }
    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={addTrxn} >
                <div className="form-control">
                    <label htmlFor="text">Text</label>
                    <input type="text" id="text" onChange={e =>
                        setText(e.target.value)
                    } value={text} placeholder="Enter text..." />
                </div>
                <div className="form-control">
                    <label htmlFor="amount"
                    >Amount <br />
            (negative - expense, positive - income)</label
                    >
                    <input type="number" id="amount" value={amount} onChange={e =>
                        setAmount(e.target.value)
                    } placeholder="Enter amount..." />
                </div>
                <button className="btn">Add transaction</button>
            </form>
        </>
    )
}
