import PropTypes from 'prop-types';
import Div from './LayoutStyles';

const Layout = ({ children }) => <Div>{children}</Div>;

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default Layout;
