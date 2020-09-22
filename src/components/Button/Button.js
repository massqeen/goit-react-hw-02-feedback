import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ title }) => (
  <button type="button" className={styles.feedbackButton}>
    {title}
  </button>
);

Button.propTypes = { title: PropTypes.string.isRequired };
export default Button;
