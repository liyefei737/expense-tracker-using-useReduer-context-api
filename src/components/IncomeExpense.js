import React, { useContext } from 'react'
import { GlobalContext } from "../context/appState";
export const IncomeExpense = () => {
    const { transactions } = useContext(GlobalContext);
    let income, expense;
    income = 0;
    expense = 0;
    transactions.forEach((t) => {
        if (t.amount >= 0) {
            income += t.amount;
        } else {
            expense += Math.abs(t.amount);
        }
    })
    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p id="money-plus" className="money plus">+${income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p id="money-minus" className="money minus">-${expense}</p>
            </div>
        </div>
    )
}
