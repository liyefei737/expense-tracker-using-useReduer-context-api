import React, { useContext } from 'react'
import { GlobalContext } from "../context/appState";


export const Transaction = ({ transaction }) => {

    let moneySign, boarderColorClss;
    if (transaction.amount >= 0) {
        moneySign = "+";
        boarderColorClss = "plus";
    } else {
        moneySign = "-";
        boarderColorClss = "minus";
    }

    const { ACTIONS } = useContext(GlobalContext);

    const deleteTrxn = () => {
        ACTIONS.deleteTrxn(transaction.id);
    }

    return (
        <li className={boarderColorClss}>
            {transaction.text} <span> {moneySign}${Math.abs(transaction.amount)}</span><button className="delete-btn" onClick={deleteTrxn}>x</button>
        </li>
    )
}
