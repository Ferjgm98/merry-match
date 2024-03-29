import { HTMLMotionProps, MotionProps } from 'framer-motion';

export enum ButtonVariants {
  primary = 'primary',
  secondary = 'secondary',
  success = 'success',
  danger = 'danger',
  base = 'base',
}

export enum ButtonSizes {
  base = 'base',
  xs = 'xs',
  sm = 'sm',
  md = 'md',
  lg = 'lg',
  fluid = 'fluid',
}

export interface ButtonComponentProps extends HTMLMotionProps<'button'> {
  isLoading?: boolean;
  icon?: React.ReactElement;
  variant?: keyof typeof ButtonVariants;
  size?: keyof typeof ButtonSizes;
}
