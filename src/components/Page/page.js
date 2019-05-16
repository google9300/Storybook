import React from 'react';
import PropTypes from 'prop-types';
import './pageStyles.css';

const Page = ({ children, ...rest }) => (
  <div className="page" {...rest}>
    {children}
  </div>
);

Page.propTypes = {
  children: PropTypes.node.isRequired
};
export default Page;
