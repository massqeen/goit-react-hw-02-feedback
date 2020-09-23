import React, { Component } from 'react';
import Layout from './Layout/Layout';
import SectionTitle from './SectionTitle';
import Button from './Button/Button';
import Statistics from './Statistics';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  countTotalFeedback() {
    return this.state.good + this.state.neutral + this.state.bad;
  }

  countPositiveFeedbackPercentage() {
    const total = this.countTotalFeedback();
    return +((this.state.good / total) * 100).toFixed(1);
  }

  clickHandler = (feedbackType) => {
    return this.setState((prevState) => ({
      [feedbackType]: prevState[feedbackType] + 1,
    }));
  };

  render() {
    return (
      <Layout>
        <SectionTitle title="What do you think of us?" />
        <Button title="Good" onFeedback={() => this.clickHandler('good')} />
        <Button
          title="Neutral"
          onFeedback={() => this.clickHandler('neutral')}
        />
        <Button title="Bad" onFeedback={() => this.clickHandler('bad')} />
        <SectionTitle title="Statistics" />
        <Statistics
          good={this.state.good}
          neutral={this.state.neutral}
          bad={this.state.bad}
          total={this.countTotalFeedback()}
          posFeedback={this.countPositiveFeedbackPercentage()}
        />
      </Layout>
    );
  }
}

export default App;
