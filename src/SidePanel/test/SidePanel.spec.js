//file.only
import React from 'react';
import { createRendererWithUniDriver, cleanup } from '../../../test/utils/unit';
import SidePanel from '../SidePanel';
import { sidePanelPrivateDriverFactory } from './SidePanel.private.uni.driver';

fdescribe('SidePanel', () => {
  const render = createRendererWithUniDriver(sidePanelPrivateDriverFactory);

  afterEach(() => {
    cleanup();
  });

  it('should render', async () => {
    const { driver } = render(<SidePanel />);
    expect(await driver.exists()).toBe(true);
  });

  it('should pass the class name', async () => {
    const expectedClassName = 'some-selector';
    const { driver } = render(<SidePanel className={expectedClassName} />);
    expect(await driver.hasClass(expectedClassName)).toBe(true);
  });

  it('should have content', async () => {
    const content = 'Any Content';
    const { driver } = render(
      <SidePanel>
        <SidePanel.Content>{content}</SidePanel.Content>
      </SidePanel>,
    );

    expect(await driver.contentExists()).toBe(true);
  });

  describe('SidePanel.Header', () => {
    it('should have header', async () => {
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header />
        </SidePanel>,
      );

      expect(await driver.header.exists()).toBe(true);
    });

    it('should have string title', async () => {
      const title = 'some text';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header title={title} />
        </SidePanel>,
      );

      expect(await driver.headerDriver.getTitleText()).toBe(title);
    });

    xit('should have string title with infoTooltipContent ', async () => {
      //TODO:zeev: wsr driver not working...
      const infoTooltipContent = 'infoTooltipContent';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header
            title={'title'}
            infoTooltipContent={infoTooltipContent}
          />
        </SidePanel>,
      );

      expect(await driver.headerDriver.getTooltipContent()).toBe(
        infoTooltipContent,
      );
    });

    it('should have custom node title', async () => {
      const title = 'some text';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header title={<div data-hook={'custom-node'}>{title}</div>} />
        </SidePanel>,
      );

      expect(await driver.header.getCustomNodeText()).toBe(title);
    });

    it('should show divider', async () => {
      const title = 'some text';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header title={title} showDivider />
        </SidePanel>,
      );

      expect(await driver.headerDriver.isDividerExists()).toBe(true);
    });

    it('should not show divider', async () => {
      const title = 'some text';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header title={title} showDivider={false} />
        </SidePanel>,
      );

      expect(await driver.headerDriver.isDividerExists()).toBe(false);
    });

    it('should have close button', async () => {
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header />
        </SidePanel>,
      );

      expect(await driver.headerDriver.isCloseButtonExists()).toBe(true);
    });

    it('should call onClose when close button clicked', async () => {
      const onClose = jest.fn();
      const { driver } = render(
        <SidePanel onClose={onClose}>
          <SidePanel.Header />
        </SidePanel>,
      );

      await driver.clickClose();

      expect(onClose).toHaveBeenCalled();
    });

    it('should have children', async () => {
      const title = 'some text';
      const { driver } = render(
        <SidePanel>
          <SidePanel.Header >
            <div data-hook={'custom-node'}>{title}</div>
          </SidePanel.Header>
        </SidePanel>,
      );

      expect(await driver.header.getCustomNodeText()).toBe(title);
    })
  });
});
