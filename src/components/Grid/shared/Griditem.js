import React from 'react';
import PropTypes from 'prop-types';

// TESTING CLASS
const Styleitem = {
  backgroundColor: 'black',
  flex: 0
};

const Griditem = ({ children, item, ...rest }) => (
  <div
    style={{
      ...Styleitem,
      ...(item && item === 1 ? { flexBasis: '5%' } : null),
      ...(item && item === 2 ? { flexBasis: '10%' } : null),
      ...(item && item === 3 ? { flexBasis: '15%' } : null),
      ...(item && item === 4 ? { flexBasis: '20%' } : null),
      ...(item && item === 5 ? { flexBasis: '25%' } : null),
      ...(item && item === 6 ? { flexBasis: '30%' } : null),
      ...(item && item === 7 ? { flexBasis: '35%' } : null),
      ...(item && item === 8 ? { flexBasis: '40%' } : null),
      ...(item && item === 9 ? { flexBasis: '45%' } : null),
      ...(item && item === 10 ? { flexBasis: '50%' } : null),
      ...(item && item === 11 ? { flexBasis: '55%' } : null),
      ...(item && item === 12 ? { flexBasis: '60%' } : null),
      ...(item && item === 13 ? { flexBasis: '65%' } : null),
      ...(item && item === 14 ? { flexBasis: '70%' } : null),
      ...(item && item === 15 ? { flexBasis: '75%' } : null),
      ...(item && item === 16 ? { flexBasis: '80%' } : null),
      ...(item && item === 17 ? { flexBasis: '85%' } : null),
      ...(item && item === 18 ? { flexBasis: '90%' } : null),
      ...(item && item === 19 ? { flexBasis: '95%' } : null),
      ...(item && item === 20 ? { flexBasis: '100%' } : null)
    }}
    {...rest}
  >
    {children}
  </div>
);

Griditem.propTypes = {
  children: PropTypes.node.isRequired,
  item: PropTypes.number
};
Griditem.defaultProps = {
  item: 5
};
export default Griditem;
