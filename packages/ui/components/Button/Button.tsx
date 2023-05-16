import type { ButtonProps } from './types';
import { BaseButton, BaseButtonText } from './Button.style';
import { forwardRef } from 'react';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      icon,
      type = 'text',
      color = 'primary',
      size = 'medium',
      children,
      css,
      disabled,
      iconOnly,
      onClick,
      rounded = true,
    },
    ref
  ) => {
    return (
      <BaseButton
        role="button"
        ref={ref}
        type={type}
        color={color}
        size={size}
        css={css}
        iconOnly={iconOnly}
        onClick={disabled ? undefined : onClick}
        disabled={disabled}
        rounded={rounded}
      >
        {icon}
        {typeof children === 'string' ? <BaseButtonText>{children}</BaseButtonText> : children}
      </BaseButton>
    );
  }
);

Button.displayName = 'Button';

export default Button;
