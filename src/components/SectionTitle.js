import PropTypes from 'prop-types';

const SectionTitle = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

SectionTitle.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  title: PropTypes.string.isRequired,
};
SectionTitle.defaultProps = {
  title: 'Title',
};

export default SectionTitle;
