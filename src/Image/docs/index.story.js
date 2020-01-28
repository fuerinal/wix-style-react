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

import Box from '../../Box';
import { storySettings } from '../test/storySettings';
import allComponents from '../../../stories/utils/allComponents';
import sourceExample from '!raw-loader!./examples/source';
import sizeExample from '!raw-loader!./examples/size';
import fitExample from '!raw-loader!./examples/fit';
import positionExample from '!raw-loader!./examples/position';
import lazyExample from '!raw-loader!./examples/lazy';

import Image from '..';

const code = config => baseCode({ components: allComponents, ...config });

export default {
  category: storySettings.category,
  storyName: 'Image',

  component: Image,
  componentPath: '..',

  componentProps: {
    src:
      'https://static.wixstatic.com/media/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg/v1/fill/w_343,h_343,al_c,q_80,usm_0.66_1.00_0.01/89ea07a19c3d415e99a8a8a3c0ab1de8.jpg',
    fit: 'cover',
    position: 'center',
  },

  exampleProps: {
    position: [
      'center',
      'top',
      'top left',
      'top right',
      'right',
      'bottom',
      'bottom left',
      'bottom right',
      'left',
    ],
  },

  componentWrapper: ({ component }) => <Box align="center">{component}</Box>,

  sections: [
    header({
      component: <Image width="150" height="100" />,
    }),

    tabs([
      tab({
        title: 'Description',
        sections: [
          columns([
            description({
              title: 'Description',
              text: 'A basic component used to display images.',
            }),
          ]),

          importExample("import Image from 'wix-style-react/Image';"),

          divider(),

          title('Examples'),

          columns([
            description({
              title: 'Source',
              text:
                'Use `src` prop to display an image asset. If source is not provided - a default placeholder image asset is displayed.',
            }),

            code({
              compact: true,
              source: sourceExample,
            }),
          ]),

          columns([
            description({
              title: 'Size',
              text:
                'An image will stretch to parent width by default and will maintain aspect ratio if there is enough space provided by parent container. Custom size of an image can be specified using `width` and `height` props.',
            }),

            code({
              compact: true,
              source: sizeExample,
            }),
          ]),

          columns([
            description({
              title: 'Fit Mode',
              text:
                'A `fit` prop can be used to customize how the image is displayed when the image asset size does not match custom size.',
            }),

            code({
              compact: true,
              source: fitExample,
            }),
          ]),

          columns([
            description({
              title: 'Position',
              text:
                'A `position` prop can be used to adjust the placement of an image affected by one of the `fit` prop modes. Any valid [CSS position](https://developer.mozilla.org/en-US/docs/Web/CSS/position_value) value can be used.',
            }),

            code({
              compact: true,
              source: positionExample,
            }),
          ]),

          columns([
            description({
              title: 'Lazy Loading',
              text:
                'An image marked with `loading="lazy"` prop will only load source asset when it reaches a calculated distance from the viewport.',
            }),

            code({
              compact: true,
              source: lazyExample,
            }),
          ]),
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
