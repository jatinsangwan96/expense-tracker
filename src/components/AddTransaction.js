import { useState, useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const AddTransaction = () => {
    const { addTransaction } = useContext(GlobalContext);

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);

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
            text,
            amount: +amount
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add New Transaction</h3>
            <form onSubmit={submitHandler}>
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
                    <label htmlFor="amount">Amount <br />(negative - expense, positive - income)</label>
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