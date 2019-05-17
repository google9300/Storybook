import React from 'react';
import PropTypes from 'prop-types';
import './gridStyle.css';

const Grid = ({ children, ...rest }) => (
  <div className="grid" {...rest}>
    {children}
  </div>
);

Grid.propTypes = {
  children: PropTypes.node.isRequired
};
export default Grid;
