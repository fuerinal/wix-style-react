import React from 'react';
import {
  header,
  tabs,
  tab,
  description,
  importExample,
  title,
  columns,
  divider,
  code as baseCode,
  playground,
  api,
  testkit,
} from 'wix-storybook-utils/Sections';

import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';

import SidePanel from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'SidePanel',

  component: SidePanel,
  componentPath: '..',

  componentProps: {
    buttonText: 'Hello World!',
  },

  exampleProps: {
    // Put here presets of props, for more info:
    // https://github.com/wix/wix-ui/blob/master/packages/wix-storybook-utils/docs/usage.md#using-list
  },

  sections: [
    header({
      sourceUrl:
        'https://github.com/wix/wix-style-react/tree/master/src/SidePanel/',
      component: <SidePanel buttonText="Click me!" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text:
                'This line here should briefly describe component in just a sentence or two. It should be short and easy to read.',
            }),
          ]),

          columns([
            importExample("import SidePanel from 'wix-style-react/SidePanel';"),
          ]),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Simple Usage',
              text: 'empty',
            }),

            code({
              compact: true,
              source: `
<SidePanel onCloseButtonClick={() => alert('click!')}>
<SidePanel.Header title="Title" infoTooltipContent="Tooltip" ></SidePanel.Header>
      <SidePanel.Content>
        <Box height="160px" >BOX 1</Box>
      </SidePanel.Content>
      <SidePanel.Footer>
        <Box height="20px" >Footer</Box>
      </SidePanel.Footer>
</SidePanel>`,
            }),
          ]),

          columns([
            description({
              title: 'Custom Title',
              text: 'empty',
            }),

            code({
              compact: true,
              source: `
<SidePanel >
    <SidePanel.Header title={<Input/>} showDivider={false}></SidePanel.Header>
    <SidePanel.Content>
      <Box height="160px" >BOX 1</Box>
    </SidePanel.Content>
</SidePanel>`,
            }),
          ]),

          columns([
            description({
              title: 'Custom Header Node',
              text: 'empty',
            }),

            code({
              compact: true,
              source: `
<SidePanel >
<SidePanel.Header title={<Input/>} showDivider={false}>

<Tabs
    items={[
      { id: 1, title: 'item 1' },
      { id: 2, title: 'item 2' },
      { id: 3, title: 'item 3' },
      { id: 4, title: 'item 4' },
      { id: 5, title: 'item 5' },
    ]}
    activeId={1}

  />

</SidePanel.Header>
      <SidePanel.Content>
        <Box height="160px" >BOX 1</Box>
      </SidePanel.Content>
</SidePanel>`,
            }),
          ]),

          columns([
            description({
              title: 'Simple Usage',
              text: 'A simple example with compact preview',
            }),

            code({
              compact: true,
              source: '<SidePanel buttonText="Hello World!"/>',
            }),
          ]),

          code({
            title: 'Full Interactive Preview',
            description: 'A non compact version of same code example as above',
            source: '<SidePanel buttonText="Hello World!"/>',
          }),
        ],
      }),

      ...[
        { title: 'API', sections: [api()] },
        { title: 'Testkit', sections: [testkit()] },
        { title: 'Playground', sections: [playground()] },
      ].map(tab),
    ]),
  ],
};
