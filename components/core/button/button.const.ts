import { ButtonSizes, ButtonVariants } from './button.types';

export const MAPPED_SIZE_CLASSES = {
  [ButtonSizes.xs]: 'text-xs px-2 py-1',
  [ButtonSizes.sm]: 'text-sm px-3 py-2',
  [ButtonSizes.md]: 'text-base px-4 py-3',
  [ButtonSizes.lg]: 'text-lg px-6 py-4',
  [ButtonSizes.fluid]: 'text-base px-4 py-3 w-full',
  [ButtonSizes.base]: 'text-base p-0',
};

export const MAPPED_VARIANT_CLASSES = {
  [ButtonVariants.primary]:
    'bg-primary text-primary-foreground opacity-95 hover:opacity-100',
  [ButtonVariants.secondary]:
    'bg-background border border-2 border-input text-input',
  [ButtonVariants.success]: 'bg-secondary text-secondary-foreground text-white',
  [ButtonVariants.danger]: 'bg-destructive text-destructive-foreground',
  [ButtonVariants.base]: 'background-transparent',
};
