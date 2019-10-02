import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';

import ToggleSwitch from '../ToggleSwitch';
import { toggleSwitchPrivateDriverFactory } from './ToggleSwitch.private.uni.driver';

describe('ToggleSwitch', () => {
  const render = createRendererWithUniDriver(toggleSwitchPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<ToggleSwitch />);

    expect(await driver.exists()).toBeTruthy();
    expect(await driver.getButtonText()).toEqual('Click me!');
  });

  it('should increment', async () => {
    const { driver } = render(<ToggleSwitch />);

    await driver.clickButton();
    await driver.clickButton();

    expect(await driver.getCountText()).toEqual(
      'You clicked this button even number (2) of times',
    );
  });

  it('should allow changing the button text', async () => {
    const { driver } = render(<ToggleSwitch buttonText="Press me" />);

    expect(await driver.getButtonText()).toEqual('Press me');
  });
});
