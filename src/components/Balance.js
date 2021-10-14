import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Balance = () => {
    const {transactions} = useContext(GlobalContext);

    const incomeType = transactions.filter((transaction) => transaction.type === 'inc');
    const expenseType = transactions.filter((transaction) => transaction.type === 'exp');

    const incomeAmounts = incomeType.map((transaction) => transaction.amount);
    const expenseAmounts = expenseType.map((transaction) => transaction.amount);

    const income = incomeAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = expenseAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    const total = income - expense;

    return (
        <>
            <h4>Your Balance</h4>
            <h1>&#x20B9;{total}</h1>
        </>
    );
}

export default Balance;