import React from 'react';
import PropTypes, { node } from 'prop-types';
import styles from './Footer.st.css';
import { dataHooks } from '../constants';
import classNames from 'classnames';
import Divider from '../../Divider';

class Footer extends React.PureComponent {
  static displayName = 'Footer';

  static propTypes = {
    className: PropTypes.string,
    children: node,
    sticky: PropTypes.bool,
    showDivider: PropTypes.bool,
  };

  static defaultProps = {
    sticky: true,
    showDivider: true,
  };

  render() {
    const { className, children, showDivider } = this.props;
    const rootClassNames = classNames(styles.root, className);

    return (
      <div className={rootClassNames} data-hook={dataHooks.sidePanelFooter}>
        {showDivider && <Divider dataHook={dataHooks.sidePanelHeaderDivider} />}
        <div className={styles.footerContainer}>{children}</div>
      </div>
    );
  }
}

export default Footer;
