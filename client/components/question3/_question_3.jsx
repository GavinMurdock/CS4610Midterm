import { useContext, useEffect, useState } from 'react';
import { Transaction } from './transaction';
import { ApiContext } from '../../utils/api_context';

export const Question3 = () => {
  const api = useContext(ApiContext);
  const [transactions, setTransactions] = useState([]);

  const getTransactions = async () => {
    const res = await api.get('/transactions');
    setTransactions(res.transactions);
  };

  useEffect(getTransactions, []);

  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <Transaction transaction={transaction} />
        </div>
      ))}
    </div>
  );
};
