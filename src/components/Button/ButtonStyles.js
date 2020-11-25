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

export default ButtonStyled;
