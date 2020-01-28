import React from 'react';
import PropTypes, { node } from 'prop-types';
import styles from './SidePanel.st.css';
import classNames from 'classnames';
import Header from './Header';
import Content from './Content';
import Footer from './Footer';

class SidePanel extends React.PureComponent {
  static displayName = 'SidePanel';

  static propTypes = {
    className: PropTypes.string,
    dataHook: PropTypes.string,
    onClose: PropTypes.func,
    children: node,
  };

  static defaultProps = {
    onClose: () => null,
  };

  passPropsToChildren() {
    const { children, onClose } = this.props;

    return React.Children.map(children, child => {
      let props = {};
      switch (child.type.displayName) {
        case Header.displayName: {
          props = {
            onClose,
          };
          break;
        }
        default: {
          break;
        }
      }

      return React.cloneElement(child, props);
    });
  }

  render() {
    const { dataHook, className } = this.props;
    const rootClassNames = classNames(styles.root, className);
    const childrenWithProps = this.passPropsToChildren();

    return (
      <div className={rootClassNames} data-hook={dataHook}>
        {childrenWithProps}
      </div>
    );
  }
}

SidePanel.Header = Header;
SidePanel.Content = Content;
SidePanel.Footer = Footer;

export default SidePanel;
