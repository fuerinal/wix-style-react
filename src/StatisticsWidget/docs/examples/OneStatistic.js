/* eslint-disable no-undef */
import React from 'react';
import StatisticsWidget from 'wix-style-react/StatisticsWidget';

render(
  <div style={{ background: '#fff' }}>
    <StatisticsWidget
      statistics={[
        {
          value: '$3,500',
          description: 'Thursday',
          percentage: -11,
          invertedPercentage: true,
          descriptionInfo: 'Sales on Thursday',
        },
      ]}
    />
  </div>,
);