import React, { Component } from 'react';
import Layout from './Layout/Layout';
import PropTypes from 'prop-types';

class App extends Component {
  static propTypes = {};
  static defaultProps = {};
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  render() {
    return <Layout> </Layout>;
  }
}

export default App;
