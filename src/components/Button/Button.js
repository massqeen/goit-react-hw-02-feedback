import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ title, onFeedback }) => (
  <button type="button" className={styles.feedbackButton} onClick={onFeedback}>
    {title}
  </button>
);

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onFeedback: PropTypes.func.isRequired,
};
export default Button;
