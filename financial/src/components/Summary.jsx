import React from 'react';

const Summary = ({ income, expenses }) => {
  const balance = income - expenses;

  return (
    <div className="summary">
      <h3>Summary</h3>
      <p className="income">Income: ${income.toFixed(2)}</p>
      <p className="expenses">Expenses: ${expenses.toFixed(2)}</p>
      <p className="balance">Balance: ${balance.toFixed(2)}</p>
    </div>
  );
};

export default Summary;
