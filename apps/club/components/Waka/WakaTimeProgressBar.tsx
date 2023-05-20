import { BaseHTMLAttributes } from 'react';
import { wakaNumberToTime } from '@megabrain/core';
import { Flex, ProgressBar, Text, CSS } from '@megabrain/ui';

import { progressIndicatorStyle, trackBarStyle } from './WakaTimeProgressBar.style';
import { calcPercentage, randomHexColor } from '~/utils';

interface WakaTimeProgressBarProps {
  time: number;
  limit: number;
  css?: BaseHTMLAttributes<HTMLDivElement> & CSS;
}

export const WakaTimeProgressBar: React.FC<WakaTimeProgressBarProps> = ({ time, limit, css }) => {
  return (
    <Flex
      flow
      gravity="all"
      direction="col"
      css={css}
    >
      <ProgressBar
        progressBorder
        trackBorder
        trackCss={trackBarStyle}
        progressCss={{ background: randomHexColor(0xe6e8ee, 0x121212) }}
        percentage={calcPercentage(time, limit) + '%'}
      />
      <Flex
        justify="between"
        full="horizontal"
      >
        <Text
          css={progressIndicatorStyle}
          type="tertiary"
        >
          0H
        </Text>
        <Text
          css={progressIndicatorStyle}
          type="tertiary"
        >
          ㅤㅤ
        </Text>
        <Text
          css={progressIndicatorStyle}
          type="tertiary"
        >
          {wakaNumberToTime(limit / 2).hour + 'H'}
        </Text>
        <Text
          css={progressIndicatorStyle}
          type="tertiary"
        >
          {wakaNumberToTime(limit / 1.5).hour + 'H'}
        </Text>
        <Text
          css={progressIndicatorStyle}
          type="tertiary"
        >
          {wakaNumberToTime(limit).hour + 'H'}
        </Text>
      </Flex>
    </Flex>
  );
};
