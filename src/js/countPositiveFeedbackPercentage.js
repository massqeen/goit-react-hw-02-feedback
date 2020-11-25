import countTotalFeedback from './countTotalFeedback';

const countPositiveFeedbackPercentage = (obj, key) => {
  const total = countTotalFeedback(obj);
  const result = +((obj[key] / total) * 100).toFixed(1);
  return total ? result : 0;
};

export default countPositiveFeedbackPercentage;
