import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = (props) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const deleteTransactionHandler = () => {
        deleteTransaction(props.transaction.id);
    }

    const sign = props.transaction.amount < 0 ? '-' : '+';

    return (
        <li className={props.transaction.amount < 0 ? 'minus' : 'plus'}>
            {props.transaction.text} <span>{sign}&#x20B9;{Math.abs(props.transaction.amount)}</span><button onClick={deleteTransactionHandler} className="delete-btn"><i class="fas fa-times-circle" /></button>
        </li>
    );
}

export default Transaction;