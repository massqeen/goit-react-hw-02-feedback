import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button/Button';

const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <>
      {options.map((option, i) => {
        return <Button key={i} title={option} onFeedback={onFeedback} />;
      })}
    </>
  );
};

FeedbackOptions.defaultProps = {
  options: ['good', 'neutral', 'bad'],
};
FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
