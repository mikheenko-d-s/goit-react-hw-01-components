import React from 'react';
import PropTypes from 'prop-types';

import styles from './Friend.module.css';

function Friend({ avatar, name, isOnline }) {
  return (
    <li className={styles.item}>
      <span className={isOnline ? styles.online : styles.offline}></span>
      <img
        className={styles.avatar}
        src={avatar}
        alt={`Аватар друга ${name}`}
        width="48"
      />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

export default Friend;

Friend.defaultProps = {
  avatar: 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
};

Friend.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
};