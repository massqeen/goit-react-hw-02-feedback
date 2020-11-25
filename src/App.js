import { useState } from 'react';
import Layout from './components/Layout/Layout';
import SectionTitle from './components/SectionTitle';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';
import countTotalFeedback from './js/countTotalFeedback';
import countPositiveFeedbackPercentage from './js/countPositiveFeedbackPercentage';

const App = () => {
  const [feedback, setFeedback] = useState({ good: 0, neutral: 0, bad: 0 });
  const feedbackTypes = Object.keys(feedback).map((key) => key);

  const increaseCounter = (feedbackType) => {
    setFeedback((prevState) => ({
      ...prevState,
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  const feedbackStats = (
    <Statistics
      good={feedback.good}
      neutral={feedback.neutral}
      bad={feedback.bad}
      total={countTotalFeedback(feedback)}
      posFeedback={countPositiveFeedbackPercentage(feedback, 'good')}
    />
  );
  const notification = <Notification message="No feedback given :(" />;

  return (
    <Layout>
      <SectionTitle title="What do you think of us?">
        <FeedbackOptions options={feedbackTypes} onFeedback={increaseCounter} />
      </SectionTitle>
      <SectionTitle title="Statistics">
        {countTotalFeedback(feedback) > 0 ? feedbackStats : notification}
      </SectionTitle>
    </Layout>
  );
};

export default App;
