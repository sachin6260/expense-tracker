import React, { useState } from 'react';
import TransactionForm from './TransactionForm';
import TransactionList from './TransactionList';
import Summary from './Summary';

const ExpenseTracker = () => {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (transaction) => {
    setTransactions([...transactions, transaction]);
  };

  const calculateIncome = () => {
    return transactions
      .filter((transaction) => transaction.type === 'income')
      .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
  };

  const calculateExpenses = () => {
    return transactions
      .filter((transaction) => transaction.type === 'expense')
      .reduce((acc, transaction) => acc + parseFloat(transaction.amount), 0);
  };

  return (
    <div className="expense-tracker">
      <div className="first-row">
        <TransactionForm addTransaction={addTransaction} />
        <Summary income={calculateIncome()} expenses={calculateExpenses()} />
      </div>
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default ExpenseTracker;
