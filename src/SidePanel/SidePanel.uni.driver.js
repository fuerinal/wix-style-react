import { dataHooks } from './constants';
import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { formFieldUniDriverFactory } from '../FormField/FormField.uni.driver';
import { dividerDriverFactory } from '../Divider/Divider.uni.driver';
import { closeButtonDriverFactory } from '../CloseButton/CloseButton.uni.driver';

export const sidePanelDriverFactory = (base, body) => {
  const titleFormFieldDriver = formFieldUniDriverFactory(base, body, {
    dataHook: dataHooks.sidePanelHeaderFormField,
  });

  const headerDividerDriver = dividerDriverFactory(
    base.$(`[data-hook="${dataHooks.sidePanelHeaderDivider}"]`),
  );

  const footerDividerDriver = dividerDriverFactory(
    base.$(`[data-hook="${dataHooks.sidePanelHeaderDivider}"]`),
  );

  const closeButtonDriver = closeButtonDriverFactory(
    base.$(`[data-hook="${dataHooks.sidePanelHeaderCloseButton}"]`),
  );

  return {
    ...baseUniDriverFactory(base),

    /** Get the current count */
    getCountText: async () =>
      base.$(`[data-hook="${dataHooks.sidePanelCount}"]`).text(),

    /** Click the button */
    clickButton: async () =>
      base.$(`[data-hook="${dataHooks.sidePanelButton}"]`).click(),

    /** Get the button's text */
    getButtonText: async () =>
      base.$(`[data-hook="${dataHooks.sidePanelButton}"]`).text(),

    clickClose: async () => closeButtonDriver.click(),

    headerDriver: {
      getTitleText: async () =>
        (await titleFormFieldDriver.getLabel()).textContent,
      getTooltipContent: async () => titleFormFieldDriver.getInfoContent(), //TODO:zeev: not working...
      isDividerExists: async () => headerDividerDriver.exists(),
      isCloseButtonExists: async () => closeButtonDriver.exists(),
    },
    footerDriver: {
      isDividerExists: async () => footerDividerDriver.exists(),
    },
  };
};
