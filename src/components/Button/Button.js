import PropTypes from 'prop-types';
import ButtonStyled from './ButtonStyles';

const Button = ({ title = 'Good', onFeedback }) => {
  return (
    <ButtonStyled type="button" onClick={() => onFeedback(title.toLowerCase())}>
      {title}
    </ButtonStyled>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  onFeedback: PropTypes.func.isRequired,
};
export default Button;
