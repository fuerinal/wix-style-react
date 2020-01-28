import React from 'react';
import PropTypes from 'prop-types';

import styles from './Image.st.css';

const placeholderSource = `data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='164' height='120' viewBox='0 0 164 120'%3E%3Cg fill='none'%3E%3Crect width='164' height='120' fill='%23DAEFFE'/%3E%3Cpath fill='%23B9E3FF' d='M-8.52651283e-14,120 L49.0917544,74.9616932 C52.151039,72.1550101 56.848961,72.1550101 59.9082456,74.9616932 L71.293,85.4057534 L96.9019846,59.8591624 C100.0299,56.7386931 105.095216,56.744729 108.215685,59.8726439 C108.284098,59.9412201 108.35126,60.0110332 108.417137,60.0820486 L164,120 L-8.52651283e-14,120 Z'/%3E%3Ccircle cx='67.5' cy='43.5' r='10.5' fill='%23F5FBFF'/%3E%3C/g%3E%3C/svg%3E%0A`;

const Image = ({
  dataHook,
  source,
  width,
  height,
  fit,
  position,
  lazy,
  ...otherProps
}) => {
  source = source || placeholderSource;

  const isTiled = fit === 'tile';
  const style = isTiled
    ? {
        backgroundPosition: position,
        backgroundImage: source ? `url("${source}")` : undefined,
      }
    : {
        objectFit: fit,
        objectPosition: position,
      };

  return (
    <img
      {...styles('root', { tiled: isTiled }, otherProps)}
      data-hook={dataHook}
      src={source}
      width={width}
      height={height}
      style={style}
      loading={lazy ? 'lazy' : undefined}
    />
  );
};

Image.propTypes = {
  /** Hook for testing purposes. */
  dataHook: PropTypes.string,

  /** Image asset source. A default placeholder image is displayed when source is not provided. */
  source: PropTypes.string,

  /** Width of the image element box. */
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Height of the image element box. */
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Image source content fit mode inside a box. */
  fit: PropTypes.oneOf(['contain', 'cover', 'tile', 'none']),

  /**
   * Image source content position inside an element box. Any valid
   * [CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value)
   * value.
   */
  position: PropTypes.string,

  /**
   * Lazy load the image when it reaches a calculated distance from the viewport
   * (as defined by the browser).
   */
  lazy: PropTypes.bool,
};

Image.defaultProps = {
  width: '100%',
  fit: 'cover',
  position: 'center',
  lazy: false,
};

Image.displayName = 'Image';

export default Image;
