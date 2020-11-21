import React from 'react';
import PropTypes from 'prop-types';

const Statistics = ({ good, neutral, bad, total, posFeedback }) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {posFeedback}%</p>
  </>
);

Statistics.defaultProps = {
  good: 0,
  neutral: 0,
  bad: 0,
  total: 0,
  posFeedback: 0,
};
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  posFeedback: PropTypes.number,
};

export default Statistics;
