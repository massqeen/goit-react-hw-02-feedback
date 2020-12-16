import PropTypes from 'prop-types';
import Button from './Button/Button';

const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <>
      {options.map((option, i) => (
        <Button key={i} title={option} onFeedback={onFeedback} />
      ))}
    </>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
