import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import SidePanel from '../SidePanel';
import { sidePanelPrivateDriverFactory } from './SidePanel.private.uni.driver';

describe('SidePanel', () => {
  const render = createRendererWithUniDriver(sidePanelPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<SidePanel />);

    expect(await driver.exists()).toBe(true);
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<SidePanel />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<SidePanel buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
