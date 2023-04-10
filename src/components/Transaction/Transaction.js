import PropType from 'prop-types';
import styles from './Transaction.module.css';

export const TransactionHistory = ({ items }) => {
  return (
    <table className={styles.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};
TransactionHistory.PropType = {
  items: PropType.shape({
    id: PropType.number.isRequired,
    type: PropType.string.isRequired,
    amount: PropType.number.isRequired,
    currency: PropType.string.isRequired,
  }),
};
