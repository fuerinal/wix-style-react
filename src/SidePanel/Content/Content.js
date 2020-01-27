import React from 'react';
import PropTypes, { node } from 'prop-types';
import styles from './Content.st.css';
import { dataHooks } from '../constants';
import classNames from 'classnames';

class Content extends React.PureComponent {
  static displayName = 'Content';

  static propTypes = {
    className: PropTypes.string,
    children: node,
  };

  static defaultProps = {};

  render() {
    const { className, children } = this.props;
    const rootClassNames = classNames(styles.root, className);

    return (
      <div className={rootClassNames} data-hook={dataHooks.sidePanelContent}>
        {children}
      </div>
    );
  }
}

export default Content;
