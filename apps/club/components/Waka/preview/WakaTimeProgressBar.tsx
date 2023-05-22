import { BaseHTMLAttributes } from 'react';
import { wakaNumberToTime } from '@megabrain/core';
import { Flex, ProgressBar, Text, CSS } from '@megabrain/ui';

import { progressIndicatorStyle, trackBarStyle } from './WakaTimeProgressBar.style';
import { calcPercentage } from '~/utils';
import { getProgressBarColor } from '../utils';

interface WakaTimeProgressBarProps {
  time: number;
  limit: number;
  css?: BaseHTMLAttributes<HTMLDivElement> & CSS;
  seqNo: number;
}

export const WakaTimeProgressBar: React.FC<WakaTimeProgressBarProps> = ({
  time,
  limit,
  css,
  seqNo,
}) => {
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
        progressCss={{ background: getProgressBarColor(seqNo) }}
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
          {wakaNumberToTime(limit / 2).hour + 'H'}
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
