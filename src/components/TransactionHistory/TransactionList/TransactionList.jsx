import React from 'react';
import PropTypes from 'prop-types';
import { TransactionBody, TransactionTbody } from './TransactionList.styled';

const TransactionList = ({ transactions }) => {
  return (
    <TransactionTbody>
      {transactions.map(({ id, type, amount, currency }) => (
        <TransactionBody key={id}>
          <td>{type}</td>
          <td>{amount}</td>
          <td>{currency}</td>
        </TransactionBody>
      ))}
    </TransactionTbody>
  );
};

export default TransactionList;

TransactionList.propTypes = {
  transaction: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
