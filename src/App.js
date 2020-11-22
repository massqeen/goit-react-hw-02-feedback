import { Component } from 'react';
import Layout from './components/Layout';
import SectionTitle from './components/SectionTitle';
import FeedbackOptions from './components/FeedbackOptions';
import Statistics from './components/Statistics';
import Notification from './components/Notification';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return Object.values(this.state).reduce((acc, curr) => acc + curr, 0);
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    const result = +((this.state.good / total) * 100).toFixed(1);
    return total ? result : 0;
  }

  clickHandler = (feedbackType) => {
    return this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    const options = Object.keys(this.state).map((key) => key);
    const { good, neutral, bad } = this.state;
    const feedbackStats = (
      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        total={this.countTotalFeedback()}
        posFeedback={this.countPositiveFeedbackPercentage()}
      />
    );
    const notification = <Notification message="No feedback given :(" />;

    return (
      <Layout>
        <SectionTitle title="What do you think of us?">
          <FeedbackOptions options={options} onFeedback={this.clickHandler} />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {this.countTotalFeedback() > 0 ? feedbackStats : notification}
        </SectionTitle>
      </Layout>
    );
  }
}

export default App;
