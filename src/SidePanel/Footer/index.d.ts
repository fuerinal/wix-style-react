import * as React from 'react';

export interface FooterProps {
  children?: React.ReactNode,
  className?: string,
  showDivider?: boolean,
  sticky?: boolean,
}

export default class Footer extends React.PureComponent<FooterProps> {}
