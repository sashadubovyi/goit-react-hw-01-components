import React from 'react';
import transactions from '../../../data/transactions.json';
import TransactionList from '../TransactionList/TransactionList';
import {
  TransactionTable,
  TransactionThead,
  TransactionTitleBox,
} from './TransactionHistory.styled';

const TransactionHistory = () => {
  return (
    <TransactionTable>
      <TransactionThead>
        <TransactionTitleBox>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </TransactionTitleBox>
      </TransactionThead>
      <TransactionList transactions={transactions} />
    </TransactionTable>
  );
};

export default TransactionHistory;
