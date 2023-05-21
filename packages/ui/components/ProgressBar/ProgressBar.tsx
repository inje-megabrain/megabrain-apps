import { forwardRef } from 'react';
import { BaseProgressBar, BaseProgressTrack } from './ProgressBar.style';
import { ProgressBarProps } from './types';
import { CSS } from '@megabrain/ui/styles';

export const ProgressBar = forwardRef<HTMLDivElement, ProgressBarProps>(
  ({ progressCss, trackCss, percentage, animation, progressBorder, trackBorder }, ref) => {
    return (
      <BaseProgressTrack
        ref={ref}
        css={trackCss}
        border={trackBorder}
      >
        <BaseProgressBar
          border={progressBorder}
          animation={animation}
          css={{ ...progressCss, width: percentage } as CSS}
        />
      </BaseProgressTrack>
    );
  }
);

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
