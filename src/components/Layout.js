import PropTypes from 'prop-types';
import styled from 'styled-components';

const Div = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 12px;
  padding-right: 12px;
`;

const Layout = ({ children }) => <Div>{children}</Div>;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Layout;
