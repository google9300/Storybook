import React from 'react';
import PropTypes from 'prop-types';
import './containerStyle.css';

const Container = ({ children, size, isCenterd, verticalCenter, horizontalCenter, ...rest }) => (
  <div
    className="container"
    style={{
      ...(size && size === 33 ? { minHeight: '33vh' } : null),
      ...(size && size === 50 ? { minHeight: '50vh' } : null),
      ...(size && size === 66 ? { minHeight: '66.6vh' } : null),
      ...(size && size === 100 ? { minHeight: '100vh' } : null),
      ...(isCenterd && isCenterd === true
        ? { alignItems: 'center', justifyContent: 'center' }
        : null),
      ...(horizontalCenter && horizontalCenter === true ? { justifyContent: 'center' } : null),
      ...(verticalCenter && verticalCenter === true ? { alignItems: 'center' } : null)
    }}
    {...rest}
  >
    {children}
  </div>
);

Container.propTypes = {
  children: PropTypes.node.isRequired,
  size: PropTypes.number,
  isCenterd: PropTypes.bool,
  verticalCenter: PropTypes.bool,
  horizontalCenter: PropTypes.bool
};
Container.defaultProps = {
  size: 0,
  isCenterd: false,
  verticalCenter: false,
  horizontalCenter: false
};

export default Container;
