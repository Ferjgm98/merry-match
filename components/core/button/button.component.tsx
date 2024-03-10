import * as React from 'react';
import { twMerge } from 'tailwind-merge';
import { SpinnerIcon } from '../icons';
import { MAPPED_SIZE_CLASSES, MAPPED_VARIANT_CLASSES } from './button.const';
import {
  ButtonComponentProps,
  ButtonVariants,
  ButtonSizes,
} from './button.types';

const Button: React.FC<React.PropsWithChildren<ButtonComponentProps>> = ({
  children,
  className,
  isLoading,
  variant = ButtonVariants.primary,
  size = ButtonSizes.fluid,
  icon,
  disabled,
  ...rest
}) => {
  const sizeClassNames = MAPPED_SIZE_CLASSES[size];
  const variantClassNames = MAPPED_VARIANT_CLASSES[variant];

  return (
    <button
      className={twMerge(
        'flex gap-4 items-center justify-center rounded-lg font-semibold',
        variantClassNames,
        sizeClassNames,
        disabled && 'opacity-70 hover:opacity-70 cursor-not-allowed',
        className,
      )}
      disabled={isLoading || disabled}
      {...rest}
    >
      {isLoading && <SpinnerIcon />}
      {icon && !isLoading ? icon : null}
      {children && <span>{children}</span>}
    </button>
  );
};

export default Button;
