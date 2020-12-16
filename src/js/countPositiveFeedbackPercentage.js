const countPositiveFeedbackPercentage = (good, total) => {
  const result = +((good / total) * 100).toFixed(1);
  return total ? result : 0;
};

export default countPositiveFeedbackPercentage;
