import React from 'react';
import PropTypes from 'prop-types';

function TransactionItem({ data: { type, amount, currency } }) {
  return (
    <tr>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  );
}

export default TransactionItem;

TransactionItem.propTypes = {
  data: PropTypes.shape({
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};