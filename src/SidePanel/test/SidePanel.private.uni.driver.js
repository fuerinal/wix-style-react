import { sidePanelDriverFactory as publicDriverFactory } from '../SidePanel.uni.driver';

export const sidePanelPrivateDriverFactory = base => {
  return {
    ...publicDriverFactory(base),

    // Add here driver methods that considered "private"
  };
};
