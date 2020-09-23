import React from 'react';
import PropTypes from 'prop-types';
import styles from './Button.module.css';

const Button = ({ title = 'Good', onFeedback }) => {
  return (
    <button
      type="button"
      className={styles.feedbackButton}
      onClick={() => onFeedback(title.toLowerCase())}
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onFeedback: PropTypes.func.isRequired,
};
export default Button;
