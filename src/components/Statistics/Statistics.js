import React from 'react';
import PropTypes from 'prop-types';

import StatisticsItem from '../StatisticsItem/StatisticsItem';
import styles from './Statistics.module.css';

function Statistics({ title, stats }) {
  return (
    <div className={styles.statistics}>
      {title && <h2 className={styles.title}>{title}</h2>}

      <ul className={title ? styles.statListTitleShown : styles.statList}>
        {stats.map(statsData => {
          return <StatisticsItem key={statsData.id} data={statsData} />;
        })}
      </ul>
    </div>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.array.isRequired,
};