import React from 'react';
import PropTypes from 'prop-types';

const SectionTitle = ({ title = 'Title', children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

SectionTitle.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
};

export default SectionTitle;
