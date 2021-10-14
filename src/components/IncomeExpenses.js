import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const IncomeExpenses = () => {
    const {transactions} = useContext(GlobalContext);

    const incomeType = transactions.filter((transaction) => transaction.type === 'inc');
    const expenseType = transactions.filter((transaction) => transaction.type === 'exp');

    const incomeAmounts = incomeType.map((transaction) => transaction.amount);
    const expenseAmounts = expenseType.map((transaction) => transaction.amount);

    const income = incomeAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);
    const expense = expenseAmounts.reduce((acc, item) => (acc += item), 0).toFixed(2);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Income</h4>
                <p className="money plus">&#x20B9;{income}</p>
            </div>
            <div>
                <h4>Expense</h4>
                <p className="money minus">&#x20B9;{expense}</p>
            </div>
        </div>
    );
}

export default IncomeExpenses;