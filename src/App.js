import { useState } from 'react';
import Layout from './components/Layout/Layout';
import SectionTitle from './components/SectionTitle';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import countTotalFeedback from './js/countTotalFeedback';
import countPositiveFeedbackPercentage from './js/countPositiveFeedbackPercentage';

const FeedbackTypes = { GOOD: 'good', NEUTRAL: 'neutral', BAD: 'bad' };

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);
  const feedbackTypes = Object.values(FeedbackTypes);
  const feedbackValues = [good, neutral, bad];
  const total = countTotalFeedback(feedbackValues);
  const positiveFeedback = countPositiveFeedbackPercentage(good, total);

  const increaseCounter = (feedbackType) => {
    const { GOOD, NEUTRAL, BAD } = FeedbackTypes;
    switch (feedbackType) {
      case GOOD: {
        setGood((state) => state + 1);
        break;
      }
      case NEUTRAL: {
        setNeutral((state) => state + 1);
        break;
      }
      case BAD: {
        setBad((state) => state + 1);
        break;
      }
      default:
        return;
    }
  };

  return (
    <Layout>
      <SectionTitle title="What do you think of us?">
        <FeedbackOptions options={feedbackTypes} onFeedback={increaseCounter} />
      </SectionTitle>
      <SectionTitle title="Statistics">
        <Statistics
          good={good}
          neutral={neutral}
          bad={bad}
          total={total}
          posFeedback={positiveFeedback}
        />
      </SectionTitle>
    </Layout>
  );
};

export default App;
