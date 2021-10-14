import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [type, setType] = useState({ value: "inc" })

    const optionChangeHandler = (event) => {
        setType({ value: event.target.value });
    }
    
    const textChangeHandler = (event) => {
        setText(event.target.value);
    }

    const amountChangeHandler = (event) => {
        setAmount(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            type: type.value,
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
        setText('');
        setAmount(0);
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={submitHandler}>
                <div className="form-control">
                    <label htmlFor="text">Transaction Type</label>
                    <select defaultValue={type.value} onChange={optionChangeHandler}>
                        <option value="inc">Income</option>
                        <option value="exp">Expense</option>
                    </select>
                </div>
                <div className="form-control">
                    <label htmlFor="text">Description</label>
                    <input
                        type="text"
                        value={text}
                        onChange={textChangeHandler}
                        placeholder="Enter a description..."
                    />
                </div>
                <div className="form-control">
                    <label htmlFor="amount">Amount</label>
                    <input
                        type="number"
                        value={amount}
                        onChange={amountChangeHandler}
                        placeholder="Enter amount..."
                    />
                </div>
                <button className="btn">Add Transaction</button>
            </form>
        </>
    );
}

export default AddTransaction;