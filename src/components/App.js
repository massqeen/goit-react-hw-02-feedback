import React, { Component } from 'react';
import Layout from './Layout/Layout';
import PropTypes from 'prop-types';
import SectionTitle from './SectionTitle';
import Button from './Button/Button';

class App extends Component {
  static propTypes = {};
  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  render() {
    return (
      <Layout>
        <SectionTitle title="What do you think of us?" />
        <Button title="Good" />
        <Button title="Neutral" />
        <Button title="Bad" />
        <SectionTitle title="Statistics"> </SectionTitle>
      </Layout>
    );
  }
}

export default App;
