/* eslint-disable no-undef */
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      statistics={[
        {
          value: '$500',
          description: 'Monday',
          percentage: 21,
        },
        {
          value: '$1,500',
          description: 'Tuesday',
          percentage: 0,
        },
        {
          value: '$2,500',
          percentage: -11,
        },
      ]}
    />
  </div>,
);