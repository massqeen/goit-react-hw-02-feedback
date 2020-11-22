import PropTypes from 'prop-types';
import shortid from 'shortid';
import Button from './Button';

const FeedbackOptions = ({ options, onFeedback }) => {
  return (
    <>
      {options.map((option) => {
        return (
          <Button
            key={shortid.generate()}
            title={option}
            onFeedback={onFeedback}
          />
        );
      })}
    </>
  );
};

FeedbackOptions.defaultProps = {
  options: ['good', 'neutral', 'bad'],
};
FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string).isRequired,
  onFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
