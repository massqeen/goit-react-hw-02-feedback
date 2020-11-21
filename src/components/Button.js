import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const ButtonStyled = styled.button`
  padding: 6px;
  border: 1px solid #a9a9a9;
  border-radius: 5px;
  background-color: #fff;
  min-width: 50px;
  text-transform: capitalize;

  &:not(:last-child) {
    margin-right: 10px;
  }
`;

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
