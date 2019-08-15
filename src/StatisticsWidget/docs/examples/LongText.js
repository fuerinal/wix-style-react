/* eslint-disable no-undef */
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      statistics={[
        {
          value: '$500,000,000',
          description: 'Monday',
        },
        {
          value: '$1,500',
          description: 'Tuesday sales in average',
        },
        {
          value: '4,200,000',
          description: 'Number of active customers',
        },
      ]}
    />
  </div>,
);