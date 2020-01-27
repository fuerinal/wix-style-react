import * as React from 'react';

export interface HeaderProps {
  children?: React.ReactNode,
  className?: string,
  title?: string | React.ReactNode,
  infoTooltipContent?: string,
  infoTooltipProps?,
  showDivider?: boolean,
  sticky?: boolean,
}

export default class Header extends React.PureComponent<HeaderProps> {}
