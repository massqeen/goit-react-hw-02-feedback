import PropTypes from 'prop-types';

const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  posFeedback = 0,
}) => (
  <>
    <p>Good: {good}</p>
    <p>Neutral: {neutral}</p>
    <p>Bad: {bad}</p>
    <p>Total: {total}</p>
    <p>Positive feedback: {posFeedback}%</p>
  </>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  posFeedback: PropTypes.number.isRequired,
};

export default Statistics;
