import { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';

const Transaction = (props) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const deleteTransactionHandler = () => {
        deleteTransaction(props.transaction.id);
    }

    const sign = props.transaction.type === "inc" ? '+' : '-';

    return (
        <li className={props.transaction.type === "inc" ? 'plus' : 'minus'}>
            {props.transaction.text} <span>{sign}&#x20B9;{Math.abs(props.transaction.amount)}</span><button onClick={deleteTransactionHandler} className="delete-btn"><i class="fas fa-times-circle" /></button>
        </li>
    );
}

export default Transaction;