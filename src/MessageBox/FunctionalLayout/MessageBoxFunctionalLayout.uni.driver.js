import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import styles from './MessageBoxFunctionalLayout.scss';
import { ReactBase, getElement } from '../../../test/utils/unidriver';
import { buttonDriverFactory } from '../../Button/Button.uni.driver';

export const MessageBoxFunctionalLayoutUniDriverFactory = base => {
  const confirmationButton = () => base.$('[data-hook="confirmation-button"]');
  const cancellationButton = () => base.$('[data-hook="cancellation-button"]');
  const headerCloseButton = () => base.$('[data-hook="header-close-button"]');
  const body = () => base.$('[data-hook="message-box-body"]');

  const confirmationButtonUniDriver = buttonDriverFactory(confirmationButton());
  const cancellationButtonUniDriver = buttonDriverFactory(cancellationButton());

  return {
    ...baseUniDriverFactory(base),
    exists: () => base.exists(),
    getConfirmationButtonText: () => confirmationButton().text(),
    isConfirmationButtonPrefixIconExists: async () =>
      (await confirmationButton()._prop('innerHTML')).indexOf('prefix') !== -1,
    isConfirmationButtonSuffixIconExists: async () =>
      (await confirmationButton()._prop('innerHTML')).indexOf('suffix') !== -1,
    clickOnConfirmationButton: () => confirmationButton().click(),
    getConfirmationButton: () => getElement(confirmationButton()),
    getCancellationButton: () => getElement(cancellationButton()),
    getHeaderCloseButton: () => getElement(headerCloseButton()),
    getCancellationButtonText: () => cancellationButton().text(),
    isCancellationButtonPrefixIconExists: async () =>
      (await cancellationButton()._prop('innerHTML')).indexOf('prefix') !== -1,
    isCancellationButtonSuffixIconExists: async () =>
      (await cancellationButton()._prop('innerHTML')).indexOf('suffix') !== -1,
    clickOnCancellationButton: () => cancellationButton().click(),
    clickOnHeaderCloseButton: () => headerCloseButton().click(),
    isThemeExist: theme => base.$(`.${theme}`).exists(),
    getFooter: () => getElement(base.$('[data-hook="message-box-footer"]')),
    getTitle: () => base.$('[data-hook="header-layout-title"]').text(),
    getChildBySelector: selector => getElement(base.$(selector)),
    isCancelEnable: async () => !cancellationButtonUniDriver.isButtonDisabled,
    isConfirmationEnable: async () =>
      !confirmationButtonUniDriver.isButtonDisabled,
    toHaveBodyPadding: async () =>
      !Array.from(await ReactBase(body())._DEPRECATED_getClassList()).includes(
        `${styles.noPadding}`,
      ),
  };
};
