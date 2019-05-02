import {BaseDriver} from 'wix-ui-test-utils/driver-factory';
import * as ReactTestUtils from 'react-dom/test-utils';
import {InputSize, InputTheme} from '.';

export interface InputDriver extends BaseDriver {
  trigger: (
    trigger: keyof typeof ReactTestUtils.Simulate,
    event: ReactTestUtils.SyntheticEventData
  ) => void;
  focus: (options?: FocusOptions) => void;
  blur: () => void;
  getName: () => string;
  getMaxLength: () => string;
  getType: () => string;
  keyDown: (key: ReactTestUtils.SyntheticEventData['key']) => void;
  click: () => void;
  clickSuffix: () => void;
  clickUnit: () => void;
  clickMagnifyingGlass: () => void;
  clickCustomAffix: () => void;
  clickClear: () => void;
  clickIconAffix: () => void;
  clickMenuArrow: () => void;
  mouseOver: () => void;
  mouseOut: () => void;
  clearText: () => void;
  enterText: (text: string) => void;
  getValue: () => string;
  getPlaceholder: () => string;
  getDefaultValue: () => string;
  getTabIndex: () => number;
  getReadOnly: () => boolean;
  getDisabled: () => boolean;
  getTextOverflow: () => string;
  getAriaLabel: () => string;
  getAriaControls: () => string;
  getAriaDescribedby: () => string;
  getAutocomplete: () => string;
  getRequired: () => boolean;
  hasPrefix: () => boolean;
  hasPrefixClass: () => boolean;
  hasSuffix: () => boolean;
  hasSuffixClass: () => boolean;
  hasSuffixesClass: () => boolean;
  prefixComponentExists: (style: string) => boolean;
  suffixComponentExists: (style: string) => boolean;
  isMenuArrowLast: () => boolean;
  hasExclamation: () => boolean;
  isNarrowError: () => boolean;
  hasHelp: () => boolean;
  hasError: () => boolean;
  getTooltipElement: () => HTMLElement;
  hasLoader: () => HTMLElement | null;
  getTooltipDataHook: () => string;
  getDataHook: () => string;
  getUnit: () => string;
  getCustomAffix: () => string;
  hasMagnifyingGlass: () => boolean;
  hasMenuArrow: () => boolean;
  hasClearButton: () => boolean;
  isRTL: () => boolean;
  isFocusedStyle: () => boolean;
  isHoveredStyle: () => boolean;
  isDisabled: () => boolean;
  isOfStyle: (style: InputTheme) => boolean;
  isOfSize: (size: InputSize) => boolean;
  isFocus: () => boolean;
  startComposing: () => void;
  endComposing: () => void;
  getCursorLocation: () => number;
  getRootElementClasses: () => string;
  getInputElementClasses: () => string;
  hasRightBorderRadius: () => boolean;
  hasLeftBorderRadius: () => boolean;
  isCustomInput: () => boolean;
}
