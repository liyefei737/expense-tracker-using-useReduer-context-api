import React, { useContext } from 'react'

import { GlobalContext } from "../context/appState";

import { Transaction } from "../components/Transaction";
export const TransactionList = () => {
    const { transactions } = useContext(GlobalContext);
    return (
        <>
            <h3>History</h3>
            <ul className="list">
                {transactions.map(trxn =>
                    <Transaction transaction={trxn} key={trxn.id} />
                )}

            </ul>
        </>
    )
}
