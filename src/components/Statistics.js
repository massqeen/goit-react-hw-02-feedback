import PropTypes from 'prop-types';
import Notification from './Notification';

const Statistics = ({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  posFeedback = 0,
}) => {
  const notification = <Notification message="No feedback given :(" />;
  const feedbackStats = (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {posFeedback}%</p>
    </>
  );
  return total ? feedbackStats : notification;
};

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  posFeedback: PropTypes.number.isRequired,
};

export default Statistics;
