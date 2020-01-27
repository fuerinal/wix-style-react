import { sidePanelDriverFactory as publicDriverFactory } from '../SidePanel.uni.driver';
import { dataHooks } from '../constants';

export const sidePanelPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
    hasClass: className => base.hasClass(className),
    contentExists: async () =>
      base.$(`[data-hook="${dataHooks.sidePanelContent}"]`).exists(),
    header: {
      exists: async () =>
        base.$(`[data-hook="${dataHooks.sidePanelHeader}"]`).exists(),
    },
  };
};
