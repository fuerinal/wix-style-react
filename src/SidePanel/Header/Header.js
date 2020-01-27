import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.st.css';
import { dataHooks } from '../constants';
import classNames from 'classnames';
import Tooltip from '../../Tooltip';
import Heading from '../../Heading';
import FormField from '../../FormField';
import Divider from '../../Divider';
import CloseButton from '../../CloseButton';

class Header extends React.PureComponent {
  static displayName = 'SidePanel.Header';

  static propTypes = {
    className: PropTypes.string,
    title: PropTypes.node,
    infoTooltipContent: PropTypes.string,
    infoTooltipProps: PropTypes.shape(Tooltip.propTypes),
    showDivider: PropTypes.bool,
    sticky: PropTypes.bool,
    children: PropTypes.node,
    onClose: PropTypes.func,
  };

  static defaultProps = {
    sticky: true,
    showDivider: true,
    onClose: () => null,
  };

  renderStringTitle() {
    const { title, infoTooltipContent, infoTooltipProps } = this.props;
    return (
      <FormField
        dataHook={dataHooks.sidePanelHeaderFormField}
        infoContent={infoTooltipContent}
        infoTooltipProps={infoTooltipProps}
        label={<Heading appearance="H4">{title}</Heading>}
      ></FormField>
    );
  }

  renderTitle() {
    const { title, onClose } = this.props;
    const isStringTitle = typeof title === 'string';
    return (
      <div className={styles.titleContainer}>
        {isStringTitle && this.renderStringTitle()}
        <CloseButton
          dataHook={dataHooks.sidePanelHeaderCloseButton}
          size="medium"
          onClick={onClose}
        />
      </div>
    );
  }

  render() {
    const { className, children, showDivider } = this.props;
    const rootClassNames = classNames(styles.root, className);
    return (
      <div className={rootClassNames} data-hook={dataHooks.sidePanelHeader}>
        {this.renderTitle()}
        {showDivider && <Divider dataHook={dataHooks.sidePanelHeaderDivider} />}
        {children}
      </div>
    );
  }
}

export default Header;
