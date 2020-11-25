const countTotalFeedback = (obj) =>
  Object.values(obj).reduce((acc, curr) => acc + curr, 0);

export default countTotalFeedback;
