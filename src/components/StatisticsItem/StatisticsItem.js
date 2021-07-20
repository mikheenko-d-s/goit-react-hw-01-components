import React from 'react';
import PropTypes from 'prop-types';

import { getRandomHexColor } from '../../js/utilities';

import styles from './StatisticsItem.module.css';

function StatisticsItem({ data: { label, percentage } }) {
  return (
    <li
      className={styles.item}
      style={{
        backgroundColor: getRandomHexColor(),
      }}
    >
      <span className={styles.label}>{label}</span>
      <span className={styles.percentage}>{percentage}%</span>
    </li>
  );
}

export default StatisticsItem;

StatisticsItem.propTypes = {
  data: PropTypes.shape({
    label: PropTypes.string.isRequired,
    percentage: PropTypes.number.isRequired,
  }),
};