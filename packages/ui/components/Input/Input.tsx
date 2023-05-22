import { forwardRef, useMemo } from 'react';
import { BaseInput } from './Input.style';
import { InputProps } from './types';
import { ChangeEventHandler } from 'react';
import { Flex } from '../Container';

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    { color, value, placeholder, onValueChange, css, validate, errorEl, onChange, ...props },
    ref
  ) => {
    const handleChange: ChangeEventHandler<HTMLInputElement> = (e) => {
      if (onValueChange) {
        onValueChange(e.target.value);
      }
      // call origin handler
      if (onChange) {
        onChange(e);
      }
    };

    const isError = useMemo(() => validate && !validate(value), [validate, value]);

    return (
      <Flex direction="col">
        {isError && errorEl}
        <BaseInput
          placeholder={placeholder}
          ref={ref}
          css={css}
          color={color}
          onChange={handleChange}
          error={isError}
          {...props}
        />
      </Flex>
    );
  }
);

Input.displayName = 'Input';

export default Input;
