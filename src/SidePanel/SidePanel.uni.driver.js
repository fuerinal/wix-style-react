import { dataHooks } from './constants';
import { baseUniDriverFactory } from 'wix-ui-test-utils/base-driver';
import { formFieldUniDriverFactory } from '../FormField/FormField.uni.driver';
import { dividerDriverFactory } from '../Divider/Divider.uni.driver';
import { closeButtonDriverFactory } from '../CloseButton/CloseButton.uni.driver';

export const sidePanelDriverFactory = (base, body) => {
  const headerFormFieldDriver = formFieldUniDriverFactory(base, body, {
    dataHook: dataHooks.sidePanelHeaderFormField,
  });

  const dividerDriver = dividerDriverFactory(
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
        (await headerFormFieldDriver.getLabel()).textContent,
      getTooltipContent: async () => headerFormFieldDriver.getInfoContent(), //TODO:zeev: not working...
      isDividerExists: async () => dividerDriver.exists(),
      isCloseButtonExists: async () => closeButtonDriver.exists(),
    },
  };
};
